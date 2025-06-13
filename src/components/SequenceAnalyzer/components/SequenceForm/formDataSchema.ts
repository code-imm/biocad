import { z } from "zod";
import { AMINO_ACID_SEQUENCE_REGEX } from "@/constants";

export const formDataSchema = z
  .object({
    sequence1: z
      .string()
      .min(1, "Введите первую последовательность")
      .refine((val) => AMINO_ACID_SEQUENCE_REGEX.test(val), {
        message:
          "Последовательность может содержать только валидные аминокислоты (ARNDCQEGHILKMFPSTWYV) или -",
      }),
    sequence2: z
      .string()
      .min(1, "Введите вторую последовательность")
      .refine((val) => AMINO_ACID_SEQUENCE_REGEX.test(val), {
        message:
          "Последовательность может содержать только валидные аминокислоты (ARNDCQEGHILKMFPSTWYV) или -",
      }),
    common: z.string().optional(),
  })
  .refine((data) => data.sequence1.length === data.sequence2.length, {
    path: ["common"],
    message: "Длины последовательностей должны совпадать",
  });

export type FormData = z.infer<typeof formDataSchema>;
