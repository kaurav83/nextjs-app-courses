import { FC, ReactElement } from "react";

type Props = {
  placeholder: string;
  type: string;
  className?: string;
  tag: "input" | "textarea" | "radio" | "checkbox" | "select";
  register: any;
};

export const Input: FC<Props> = ({
  placeholder,
  type,
  className,
  tag,
  register,
}): JSX.Element => {
  const renderField = (value: string) => {
    const fields: { [key: string]: ReactElement } = {
      input: (
        <input
          placeholder={placeholder}
          type={type}
          className={className}
          {...register}
        />
      ),
      textarea: <textarea placeholder={placeholder} {...register} />,
    };

    return fields[value];
  };

  return renderField(tag);
};

Input.defaultProps = {
  type: "text",
  tag: "input",
};

export default Input;
