export interface SequenceChunk {
  seq1: string;
  seq2: string;
  startIndex: number;
}

export function getSequenceChunks(
  sequence1: string,
  sequence2: string,
  chunkSize: number
): SequenceChunk[] {
  if (!chunkSize || chunkSize <= 0) return [];

  const chunks: SequenceChunk[] = [];

  for (let i = 0; i < sequence1.length; i += chunkSize) {
    chunks.push({
      seq1: sequence1.slice(i, i + chunkSize),
      seq2: sequence2.slice(i, i + chunkSize),
      startIndex: i,
    });
  }

  return chunks;
}
