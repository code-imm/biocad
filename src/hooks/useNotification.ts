import type { SnackbarCloseReason } from "@mui/material";
import { useState, type SyntheticEvent } from "react";

export function useNotification() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return {
    open,
    handleClick,
    handleClose,
  };
}
