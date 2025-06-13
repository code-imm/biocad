import { AMINO_ACID_SEQUENCE_REGEX } from "../constants";

export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
};

export const handleTextSelection = async (
  onCopySuccess: VoidFunction
): Promise<void> => {
  const selection = window.getSelection();
  if (selection && selection.toString().trim()) {
    const selectedText = selection.toString().replace(/\s+/g, "");
    if (selectedText && AMINO_ACID_SEQUENCE_REGEX.test(selectedText)) {
      await copyToClipboard(selectedText);
      onCopySuccess();
    }
  }
};
