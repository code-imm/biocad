import { TextField } from "@mui/material";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

interface SequenceTextFieldProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  onValueChange?: VoidFunction;
  label: string;
  error?: boolean;
  errorMessage?: string;
}

const SequenceTextField = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  error,
  onValueChange,
  errorMessage,
}: SequenceTextFieldProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          onChange={(e) => {
            field.onChange(e.target.value.toLocaleUpperCase());
            onValueChange?.();
          }}
          label={label}
          fullWidth
          multiline
          rows={4}
          error={error}
          helperText={errorMessage}
          slotProps={{
            htmlInput: {
              sx: {
                fontFamily: "monospace",
                fontSize: "0.95rem",
              },
            },
          }}
        />
      )}
    />
  );
};

export default SequenceTextField;
