import ControlLayout from "./ControlLayout";
import { isEmail } from "../../../validators/index.js";

const Input = ({
  type = "text",
  name,
  register,
  rules,
  className,
  label,
  required,
  iconLeft,
  iconRight,
  resettable,
  onReset,
  msgError,
  msgSuccess,
  size,
  autoFocus,
  placeholder,
  ...rest
}) => {
  if (!name) {
    throw new Error("<Input /> must have 'name' prop.");
  }

  if (!register) {
    throw new Error("<Input /> must have 'register' prop.");
  }

  if (msgError && msgSuccess) {
    throw new Error("<Input /> can have either 'msgError' or 'msgSuccess' prop.");
  }

  const msgRequired = typeof required === "string" ? required : "Required!";
  const msgPositive = "Enter a positive number!";

  const propsLayout = {
    label,
    required,
    iconLeft,
    iconRight,
    resettable,
    onReset,
    msgError,
    msgSuccess,
    size,
  };

  return (
    <div className={className}>
      <ControlLayout {...propsLayout}>
        <input
          type={type}
          maxLength={size?.toString()}
          autoFocus={autoFocus}
          placeholder={placeholder}
          {...register(name, {
            required: required ? msgRequired : false,
            setValueAs: (v) => (type === "number" ? (v === "" ? "" : +v) : v),
            min: {
              value: 0,
              message: msgPositive,
            },
            validate: {
              isEmail:
                type === "email" && required
                  ? (value) => {
                      if (!isEmail(value)) {
                        return "Email is not valid!";
                      }
                    }
                  :
                   () => {},
            },
            ...rules,
          })}
          className={
            type === "file" &&
            `file:bg-black/5 file:dark:bg-white/5 hover:file:bg-black/10 hover:file:dark:bg-white/10 file:h-full file:border-inherit ${
              iconLeft ? "file:border-x" : "pl-0 file:border-l-0 file:border-r"
            } file:text-neutral-800 file:dark:text-neutral-200 file:border-y-0 file:px-2 file:mr-2 file:cursor-pointer`
          }
          {...rest}
        />
      </ControlLayout>
    </div>
  );
};

export default Input;
