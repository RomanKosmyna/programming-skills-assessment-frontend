import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
    type?: 'text' | 'email' | 'password';
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
    const { type = 'text', label, className, registration, error } = props;

    return (
        <FieldWrapper label={label} error={error}>
            <input
                type={type}
                className={`appearance-none block w-full px-3 py-2 border bg-mainWhite dark:bg-mainDark border-gray-300 
                dark:border-darkBorder rounded-md shadow-smplaceholder-gray-400 focus:outline-none focus:ring-blue-500 
                focus:border-blue-500 sm:text-sm dark:text-mainWhite dark:focus:ring-mainWhite dark:focus:border-mainWhite
          ${className}
          `}
                {...registration}
            />
        </FieldWrapper>
    );
};