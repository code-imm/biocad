import { Box, Tooltip } from "@mui/material";
import { forwardRef } from "react";
import { aminoAcidColors, aminoAcidNames } from "@/constants";

interface AminoAcidCharProps {
  char: string;
  isDifferent?: boolean;
  globalIndex: number;
}

const AminoAcidChar = forwardRef<HTMLElement, AminoAcidCharProps>(
  ({ char, isDifferent, globalIndex }, ref) => {
    return (
      <Tooltip
        title={`${aminoAcidNames[char] || char} (позиция ${globalIndex + 1})`}
      >
        <Box
          ref={ref}
          component="span"
          sx={{
            display: "inline-block",
            backgroundColor:
              isDifferent !== false ? aminoAcidColors[char] : "#ffffff",
            minWidth: { xs: "14px", sm: "18px" },
            textAlign: "center",
            fontWeight: "bold",
            cursor: "text",
          }}
        >
          {char}
        </Box>
      </Tooltip>
    );
  }
);

export default AminoAcidChar;
