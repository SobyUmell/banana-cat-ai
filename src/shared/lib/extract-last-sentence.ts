export function extractLastSentence(text: string) {
  // Remove <think>...</think> blocks
  const cleaned = text.replace(/<think>[\s\S]*?<\/think>/g, "");

  return cleaned;
}
