import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import type { AlignmentResult } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { formDataSchema, type FormData } from "./formDataSchema";

export function useSequenceAlignmentForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
    defaultValues: {
      sequence1: "",
      sequence2: "",
    },
  });

  const {
    reset,
    setValue,
    trigger,
    formState: { errors, isSubmitted },
  } = form;

  const [alignment, setAlignment] = useState<AlignmentResult | null>(null);

  const onSubmit = (data: FormData) => {
    const { sequence1, sequence2 } = data;

    setAlignment({
      sequence1,
      sequence2,
    });
  };

  const clearSequences = () => {
    reset();
    setAlignment(null);
  };

  const triggerValidationIfSubmitted = useCallback(() => {
    if (isSubmitted) {
      trigger("common");
    }
  }, [isSubmitted]);

  const loadExample = () => {
    setValue("sequence1", "ACDEFGHIKLMNPQRSTVWYACDEFGHIKLMNPQRSTVWY");
    setValue("sequence2", "ACDEFGHIKLMNPQRSTVWYGGGGGGGGGGGGGGGGGGGG");
  };

  return {
    form,
    errors,
    alignment,
    onSubmit,
    clearSequences,
    loadExample,
    onValueChange: triggerValidationIfSubmitted,
  };
}
