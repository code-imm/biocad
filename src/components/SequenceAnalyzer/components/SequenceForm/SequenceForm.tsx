import { Box, Button, FormHelperText, Stack } from "@mui/material";
import { type Control, type FieldErrors } from "react-hook-form";
import type { FormData } from "./formDataSchema";
import SequenceTextField from "./SequenceTextField";

interface SequenceFormProps {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  onValueChange?: VoidFunction;
  onSubmit: VoidFunction;
  onClear: VoidFunction;
  onLoadExample: VoidFunction;
}

export function SequenceForm({
  control,
  errors,
  onSubmit,
  onClear,
  onValueChange,
  onLoadExample,
}: SequenceFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 3 },
          mb: 1,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <SequenceTextField
            name="sequence1"
            control={control}
            label="Последовательность 1"
            onValueChange={onValueChange}
            error={!!(errors.sequence1?.message || errors.common?.message)}
            errorMessage={errors.sequence1?.message}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <SequenceTextField
            name="sequence2"
            control={control}
            label="Последовательность 2"
            onValueChange={onValueChange}
            error={!!(errors.sequence2?.message || errors.common?.message)}
            errorMessage={errors.sequence2?.message}
          />
        </Box>
      </Box>

      {errors.common?.message && (
        <FormHelperText error sx={{ mb: 3, mx: 1 }}>
          {errors.common.message}
        </FormHelperText>
      )}

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="right"
        sx={{ mb: 4 }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          sx={{ px: { xs: 2, sm: 4 } }}
        >
          Выровнять последовательности
        </Button>
        <Button
          onClick={onClear}
          variant="outlined"
          color="secondary"
          size="medium"
          sx={{ px: { xs: 2, sm: 4 } }}
        >
          Очистить
        </Button>
        <Button
          onClick={onLoadExample}
          variant="outlined"
          color="success"
          size="medium"
          sx={{ px: { xs: 2, sm: 4 } }}
        >
          Пример
        </Button>
      </Stack>
    </form>
  );
}
