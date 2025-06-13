import { Box, Paper, Typography } from "@mui/material";

import type { AlignmentResult } from "@/types";
import { ColorLegend } from "./ColorLegend";
import { SequenceVisualization } from "./SequenceVisualization";

interface AlignmentResultsProps {
  alignment: AlignmentResult;
  onCopyNotification: VoidFunction;
}

export function AlignmentResults({
  alignment,
  onCopyNotification,
}: AlignmentResultsProps) {
  return (
    <Paper elevation={2} sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", sm: "center" },
          mb: 3,
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          Результат выравнивания
        </Typography>
      </Box>

      <SequenceVisualization
        sequence1={alignment.sequence1}
        sequence2={alignment.sequence2}
        onCopyNotification={onCopyNotification}
      />

      <ColorLegend />
    </Paper>
  );
}
