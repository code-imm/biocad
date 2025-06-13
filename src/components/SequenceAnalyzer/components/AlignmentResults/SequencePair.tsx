import { Box } from "@mui/material";
import { memo, type RefObject } from "react";
import AminoAcidChar from "./AminoAcidChar";

interface SequencePairProps {
  chunk1: string;
  chunk2: string;
  chunkIndex: number;
  chunkSize: number;
  sequence1: string;
  selectedSequence: null | 1 | 2;
  onMouseDown: (seq: 1 | 2) => VoidFunction;
  firstCharRef?: RefObject<HTMLElement>;
}

const SequencePair = memo<SequencePairProps>(
  ({
    chunk1,
    chunk2,
    chunkIndex,
    chunkSize,
    sequence1,
    selectedSequence,
    onMouseDown,
    firstCharRef,
  }) => {
    return (
      <Box sx={{ mb: 1 }}>
        {/* Первая последовательность */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            mb: 0.5,
            userSelect: selectedSequence === 2 ? "none" : "text",
          }}
          onMouseDown={onMouseDown(1)}
        >
          {chunk1.split("").map((char, index) => {
            const globalIndex = chunkIndex * chunkSize + index;
            return (
              <AminoAcidChar
                key={globalIndex}
                char={char}
                globalIndex={globalIndex}
                ref={chunkIndex === 0 && index === 0 ? firstCharRef : undefined}
              />
            );
          })}
        </Box>

        {/* Вторая последовательность */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            userSelect: selectedSequence === 1 ? "none" : "text",
          }}
          onMouseDown={onMouseDown(2)}
        >
          {chunk2.split("").map((char, index) => {
            const globalIndex = chunkIndex * chunkSize + index;
            const isDifferent = sequence1[globalIndex] !== char;
            return (
              <AminoAcidChar
                key={globalIndex}
                char={char}
                isDifferent={isDifferent}
                globalIndex={globalIndex}
              />
            );
          })}
        </Box>
      </Box>
    );
  }
);

export default SequencePair;
