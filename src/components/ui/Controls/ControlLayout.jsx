import { twMerge } from "tailwind-merge";
import { TiTick, TiWarning } from "react-icons/ti";
// import CircleX from "../CircleX";

const ControlLayout = ({
  label,
  required,
  iconLeft,
  iconRight,
  resettable,
  onReset,
  msgError,
  msgSuccess,
  size,
  children,
}) => {
  if (children?.length > 0) {
    throw new Error("<ControlLayout /> must have only one child.");
  }

  return (
    <label className="group relative w-full flex flex-col gap-y-1">
      {/* label */}
      {label && (
        <p className={`text-xs font-medium ${required ? "after:content-['*'] after:text-red-500 after:ml-1" : ""}`}>
          {label}
        </p>
      )}

      <div className={`relative ${size === "lg" ? "h-[46px]" : "h-[38px]"}`}>
        {/* child */}
        {{
          ...children,
          props: {
            ...children.props,
            className: twMerge(
              `absolute inset-0 bg-transparent text-sm placeholder:text-neutral-400 border ${
                size === "lg" ? "rounded-xl" : "rounded-lg"
              } duration-300`,
              msgError
                ? "border-red-500"
                : msgSuccess
                ? "border-green-500"
                : "border-darkener-200 group-hover:border-darkener-400 dark:border-lightener-200 dark:group-hover:border-lightener-400",
              size === "lg"
                ? `${iconLeft ? "pl-11" : "pl-4"} ${
                    iconRight && resettable ? "pr-24" : iconRight || resettable ? "pr-11" : "pr-4"
                  }`
                : `${iconLeft ? "pl-9" : "pl-3"} ${
                    iconRight && resettable ? "pr-20" : iconRight || resettable ? "pr-9" : "pr-3"
                  }`,
              children.props.className
            ),
          },
        }}

        {/* icon left */}
        {iconLeft && (
          <span className="absolute inset-y-0 left-0 aspect-square grid place-items-center">
            {{
              ...iconLeft,
              props: {
                ...iconLeft.props,
                className: twMerge(size === "lg" ? "text-lg" : "text-base", iconLeft.props.className),
              },
            }}
          </span>
        )}

        {/* icon reset */}
        {resettable && (
          <span
            className={`absolute inset-y-0 right-0 ${
              iconRight ? "-translate-x-full" : ""
            } aspect-square grid place-items-center pointer-events-none`}
          >
            {/* <CircleX onClick={onReset} /> */}
            x
          </span>
        )}

        {/* icon right */}
        {iconRight && (
          <span className="absolute inset-y-0 right-0 aspect-square grid place-items-center pointer-events-none">
            {{
              ...iconRight,
              props: {
                ...iconRight.props,
                className: twMerge(size === "lg" ? "text-lg" : "text-base", iconRight.props.className),
              },
            }}
          </span>
        )}
      </div>

      {/* error */}
      {msgError && (
        <span className="absolute top-full w-full flex items-center gap-x-1">
          <TiWarning className="text-sm text-red-500" />
          <p className="text-xs font-medium text-red-500">{msgError}</p>
        </span>
      )}

      {/* success */}
      {msgSuccess && (
        <span className="absolute top-full w-full flex items-center gap-x-1">
          <TiTick className="text-sm text-green-500" />
          <p className="text-xs font-medium text-green-500">{msgSuccess}</p>
        </span>
      )}
    </label>
  );
};

export default ControlLayout;
