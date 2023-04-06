import { Listbox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { Fragment, useEffect, useMemo } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import ControlLayout from "./ControlLayout";
import { v4 } from "uuid";
import { isNotEmpty } from "../../../validators/index.js";

const Select = ({
  options,
  value,
  setValue,
  name,
  register,
  rules,
  up,
  className,
  label,
  required,
  iconLeft,
  resettable,
  onReset,
  msgError,
  msgSuccess,
  size,
}) => {
  const id = useMemo(() => v4(), []);

  if (!options) {
    throw new Error("<Select /> must have 'options' prop as an array.");
  }

  if (!name) {
    throw new Error("<Select /> must have 'name' prop.");
  }

//   if (!register) {
//     throw new Error("<Select /> must have 'register' prop.");
//   }

  if (msgError && msgSuccess) {
    throw new Error("<Select /> can have either 'msgError' or 'msgSuccess' prop.");
  }

  const msgRequired = typeof required === "string" ? required : "Required!";

  const propsLayout = {
    label,
    required,
    iconLeft,
    resettable,
    onReset,
    msgError,
    msgSuccess,
    size,
  };

  useEffect(() => {
    const input = document.querySelector(`.focus-input-${id}`);
    input.focus();
    input.blur();
  }, [value]);

  return (
    <Listbox by="id" value={value ?? ""} onChange={setValue} as="div" className={twMerge("relative", className)}>
      {({ open }) => (
        <>
          <input
            value={value ?? ""}
            readOnly
            placeholder="Choose"
            {...register(name, {
              validate: {
                required: required
                  ? (value) => {
                      if (!isNotEmpty(value)) {
                        return "Required!";
                      }
                    }
                  : () => {},
              },
              setValueAs: () => (isNotEmpty(value) ? (typeof value.id === "boolean" ? value : +value) : ""),
              ...rules,
            })}
            tabIndex={-1}
            className={`absolute h-0 w-0 !ring-0 !ring-offset-0 focus-input-${id} `}
          />
          <ControlLayout
            {...propsLayout}
            iconRight={<FiChevronDown className={`${open ? "rotate-180" : ""} duration-300`} />}
          >
            <Listbox.Button className="text-start">{value!=="" ? value : "Choose "+name}</Listbox.Button>
          </ControlLayout>

          <Transition
            enter="duration-300"
            enterFrom="scale-75 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="duration-300"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-75 opacity-0"
            className={`absolute !z-50 inset-x-0 py-4 text-sm ${
              up ? "bottom-[calc(100%+.5rem)] origin-bottom" : "top-[calc(100%+.5rem)] origin-top"
            } bg-white dark:bg-dark-200 shadow-card-200 rounded-lg`}
          >
            <Listbox.Options className="px-4 max-h-44 overflow-y-auto">
              <Option value={""} />
              {options.map((value) => (
                <Option key={value} value={value} />
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};

export default Select;

function Option({ value }) {
  return (
    <Listbox.Option as={Fragment} value={value ?? null}>
      {({ active, selected }) => (
        <li
          className={`flex items-center justify-between cursor-pointer p-2 rounded-md hover:bg-gray-300 ${
            active ? "bg-darkener-50 dark:bg-lightener-50" : ""
          }`}
        >
          <p>{value ?? "—"}</p>
          {selected && <FiCheck className="text-common text-lg" />}
        </li>
      )}
    </Listbox.Option>
  );
}
