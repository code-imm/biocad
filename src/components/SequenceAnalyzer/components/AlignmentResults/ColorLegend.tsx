import { Alert, Chip, Stack, Typography } from "@mui/material";

import { colorGroups } from "@/constants";

export function ColorLegend() {
  return (
    <Alert severity="info" sx={{ mb: 2, userSelect: "none" }}>
      <Typography
        variant="subtitle2"
        gutterBottom
        sx={{
          fontSize: { xs: "0.75rem", sm: "0.875rem" },
        }}
      >
        Цветовая схема:
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        useFlexGap
        sx={{ mb: 1.5 }}
      >
        {colorGroups.map((group) => (
          <Chip
            key={group.name}
            label={group.name}
            size="small"
            sx={{
              backgroundColor: group.color,
              color: "black",
              fontWeight: 500,
              fontSize: { xs: "0.625rem", sm: "0.75rem" },
            }}
          />
        ))}
      </Stack>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.75rem", sm: "0.875rem" },
        }}
      >
        Во второй строке фоном выделены только отличающиеся аминокислоты
      </Typography>
    </Alert>
  );
}
