import { Alert, Box, Snackbar, Typography } from "@mui/material";

import { useNotification } from "@/hooks/useNotification";
import { useSequenceAlignmentForm } from "./components/SequenceForm/useSequenceAlignmentForm";
import { SequenceForm } from "./components/SequenceForm/SequenceForm";
import { AlignmentResults } from "./components/AlignmentResults/AlignmentResults";

export function SequenceAnalyzer() {
  const {
    form,
    onValueChange,
    alignment,
    onSubmit,
    clearSequences,
    loadExample,
  } = useSequenceAlignmentForm();

  const {
    open: copyNotificationVisible,
    handleClick: showCopyNotification,
    handleClose: hideCopyNotification,
  } = useNotification();

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        p: { xs: 1, sm: 2, md: 3 },
        minWidth: 0,
      }}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, mb: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "2rem", md: "2.125rem" },
          }}
        >
          Анализатор аминокислотных последовательностей
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "text.secondary",
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          Инструмент для выравнивания и анализа белковых последовательностей
        </Typography>

        <SequenceForm
          control={form.control}
          errors={form.formState.errors}
          onSubmit={form.handleSubmit(onSubmit)}
          onClear={clearSequences}
          onValueChange={onValueChange}
          onLoadExample={loadExample}
        />
      </Box>

      {alignment && (
        <AlignmentResults
          alignment={alignment}
          onCopyNotification={showCopyNotification}
        />
      )}

      <Snackbar
        open={copyNotificationVisible}
        autoHideDuration={1000}
        onClose={hideCopyNotification}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Последовательность скопирована в буфер обмена!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default SequenceAnalyzer;
