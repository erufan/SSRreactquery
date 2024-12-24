import React from "react";

interface FormType
  extends React.ForwardRefExoticComponent<
    React.FormHTMLAttributes<HTMLFormElement> &
      React.RefAttributes<HTMLFormElement>
  > {
  Input: typeof Input;
  Button: typeof Button;
}

const Form = React.forwardRef<
  HTMLFormElement,
  React.FormHTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => (
  <form ref={ref} className={`${className}`} {...props}>
    {props.children}
  </form>
)) as FormType;
Form.displayName = "Form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, "aria-label": ariaLabel, labelProps = {}, ...props }, ref) => (
    <>
      {ariaLabel && (
        <label
          htmlFor={props.id}
          className={labelProps.className}
          {...labelProps}
        >
          {ariaLabel}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full py-3 px-5 my-2 border ${className}`}
        {...props}
      />
    </>
  )
);
Input.displayName = "Input";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`bg-[#3479a4] text-white py-4 px-5 my-2 cursor-pointer ${className}`}
    {...props}
  >
    {props.children}
  </button>
));
Button.displayName = "Button";

Form.Input = Input;
Form.Button = Button;

export default Form;
