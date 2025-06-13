import { Box, Typography } from "@mui/material";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useResizeObserver, type Size } from "@/hooks/useResizeObserver";
import { handleTextSelection } from "@/utils/clipboard";
import SequenceChunks from "./SequenceChunks";

interface SequenceVisualizationProps {
  sequence1: string;
  sequence2: string;
  onCopyNotification: VoidFunction;
}

export function SequenceVisualization({
  sequence1,
  sequence2,
  onCopyNotification,
}: SequenceVisualizationProps) {
  const containerRef = useRef<HTMLElement>(null!);
  const firstCharRef = useRef<HTMLElement>(null!);
  const [chunkSize, setChunkSize] = useState<number>(200);
  const [selectedSequence, setSelectedSequence] = useState<null | 1 | 2>(null);

  const calculateChunkSize = useCallback((width: number, charWidth: number) => {
    if (width && charWidth > 0) {
      setChunkSize(Math.floor(width / charWidth));
    }
  }, []);

  const onResize = useCallback(
    ({ width: contentWidth }: Size) => {
      if (!contentWidth || !firstCharRef.current) return;
      const charWidth = firstCharRef.current.offsetWidth;
      calculateChunkSize(contentWidth, charWidth);
    },
    [calculateChunkSize]
  );

  useLayoutEffect(() => {
    if (!containerRef.current || !firstCharRef.current) return;
    const contentWidth = containerRef.current.offsetWidth;
    const charWidth = firstCharRef.current.offsetWidth;
    calculateChunkSize(contentWidth, charWidth);
  }, [calculateChunkSize]);

  useResizeObserver({ ref: containerRef, onResize });

  const handleSequenceSelection = useCallback(
    (seq: 1 | 2) => () => {
      setSelectedSequence(seq);
    },
    []
  );

  const handleTextCopy = useCallback(() => {
    handleTextSelection(onCopyNotification);
  }, [onCopyNotification]);

  return (
    <Box ref={containerRef} sx={{ mb: 4, width: "100%", userSelect: "none" }}>
      <Typography
        variant="subtitle2"
        sx={{
          mb: 2,
          color: "text.secondary",
          fontSize: { xs: "0.7rem", sm: "0.875rem" },
        }}
      >
        Выравнивание последовательностей (выделите текст для копирования):
      </Typography>

      <SequenceChunks
        sequence1={sequence1}
        sequence2={sequence2}
        chunkSize={chunkSize}
        selectedSequence={selectedSequence}
        handleMouseDown={handleSequenceSelection}
        firstCharRef={firstCharRef}
        handleSelection={handleTextCopy}
      />
    </Box>
  );
}
