import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";
// import Loading from "./Loading";

const Button = forwardRef(
  (
    {
      children,
      iconLeft,
      iconRight,
      className,
      outline,
      outlineWithColor,
      inverted,
      invertedWithColor,
      rounded,
      disabled,
      loading,
      size,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...rest}
        disabled={disabled || loading}
        className={twMerge(
          "relative flex items-center justify-center duration-200 font-normal",
          size === "xs"
            ? "h-6 text-xs px-2 rounded-md"
            : size === "sm"
            ? "h-8 text-xs px-3 rounded-lg"
            : size === "md"
            ? "h-12 text-base px-5 rounded-2xl"
            : size === "lg"
            ? "h-16 text-lg px-6 rounded-3xl"
            : "h-10 text-sm px-4 rounded-xl",
          outline || inverted
            ? "inner-border inner-border-black/20 dark:inner-border-white/20 hover:bg-black/5 active:bg-black/10 hover:dark:bg-black/25 active:dark:bg-black/40"
            : outlineWithColor || invertedWithColor
            ? "inner-border inner-border-primaryBlue dark:inner-border-secondaryBlue hover:bg-primaryBlue/10 active:bg-primaryBlue/20 hover:dark:bg-secondaryBlue/10 active:dark:bg-secondaryBlue/20 text-primaryBlue dark:text-secondaryBlue"
            : "bg-common text-white dark:text-black relative overflow-hidden z-10 before:absolute before:inset-0 hover:before:bg-black/20 active:before:bg-black/40 dark:hover:before:bg-black/10 dark:active:before:bg-black/20 before:duration-200 before:-z-10",
          (inverted || invertedWithColor) && "inner-border-0 font-medium",
          (disabled || loading) && "disabled:opacity-75 disabled:cursor-not-allowed disabled:before:hidden",
          rounded && "rounded-full",
          className
        )}
      >
        {iconLeft && (
          <span
            className={loading ? "opacity-0" : size === "xs" || size === "sm" ? "-translate-x-0.5" : "-translate-x-1"}
          >
            {iconLeft}
          </span>
        )}
        <div className={loading ? "opacity-0" : ""}>{children}</div>
        {iconRight && (
          <span
            className={loading ? "opacity-0" : size === "xs" || size === "sm" ? "translate-x-0.5" : "translate-x-1"}
          >
            {iconRight}
          </span>
        )}

        {/* {loading && (
          <Loading
            className="absolute"
            classNameInner={outline ? "bg-black dark:bg-white" : !outlineWithColor ? "bg-white dark:bg-black" : ""}
            size={size}
          />
        )} */}
      </button>
    );
  }
);

export default Button;
