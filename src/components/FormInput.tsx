import { Controller, useFormContext } from "react-hook-form";

export type InputProps = {
  name: string;
  label?: string;
};

export default function FormInput({ name, label }: InputProps) {
  const { control } = useFormContext();

  const handleValue = (value: string) => {
    if (value === "" || value === null) {
      return undefined;
    }

    return value;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div>
            {label ? <label>{label}</label> : null} <br />
            <input
              id={name}
              name={field.name}
              value={field.value}
              onChange={(e) => {
                const handledValue = handleValue(e.target.value);
                field.onChange(handledValue);
              }}
              onBlur={() => {
                field.onBlur();
              }}
            />
            {error ? <p>{error.message}</p> : null}
          </div>
        );
      }}
    />
  );
}
