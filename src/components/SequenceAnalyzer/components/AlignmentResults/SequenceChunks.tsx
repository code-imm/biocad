import { Box } from "@mui/material";
import { useMemo, type RefObject } from "react";
import { getSequenceChunks } from "@/utils/sequence";
import SequencePair from "./SequencePair";

interface SequenceChunksProps {
  sequence1: string;
  sequence2: string;
  chunkSize: number;
  selectedSequence: null | 1 | 2;
  handleMouseDown: (seq: 1 | 2) => VoidFunction;
  firstCharRef: RefObject<HTMLElement>;
  handleSelection: VoidFunction;
}

function SequenceChunks({
  sequence1,
  sequence2,
  chunkSize,
  selectedSequence,
  handleMouseDown,
  firstCharRef,
  handleSelection,
}: SequenceChunksProps) {
  const sequenceChunks = useMemo(
    () => getSequenceChunks(sequence1, sequence2, chunkSize),
    [sequence1, sequence2, chunkSize]
  );

  return (
    <Box
      sx={{
        fontFamily: "monospace",
        fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
        lineHeight: 1.4,
        userSelect: "text",
        WebkitUserSelect: "text",
        MozUserSelect: "text",
        msUserSelect: "text",
      }}
      onMouseUp={handleSelection}
    >
      {sequenceChunks.map((chunk, index) => (
        <SequencePair
          key={index}
          chunk1={chunk.seq1}
          chunk2={chunk.seq2}
          chunkIndex={index}
          chunkSize={chunkSize}
          sequence1={sequence1}
          selectedSequence={selectedSequence}
          onMouseDown={handleMouseDown}
          firstCharRef={index === 0 ? firstCharRef : undefined}
        />
      ))}
    </Box>
  );
}

export default SequenceChunks;
