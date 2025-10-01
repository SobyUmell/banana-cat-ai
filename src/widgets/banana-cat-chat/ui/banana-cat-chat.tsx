import { useState } from "react";
import { groq } from "../../../shared/api";
import { useStore } from "../../../shared/lib/chat.store";
import { BANANA_CAT_PROMPT } from "../../../shared/config";
import { type ChatCompletionMessageParam } from "groq-sdk/resources/chat.mjs";
import { useMutation } from "@tanstack/react-query";

export const BananaCatChat = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const setMessage = useStore((state) => state.setMessage);
  const setStatus = useStore((state) => state.setStatus);
  const setTalking = useStore((state) => state.setTalking);

  const { mutate: handleSendMutation } = useMutation({
    mutationFn: async () => {
      if (inputValue.trim() === "") return;
      setStatus("loading");

      const newMessage: ChatCompletionMessageParam = {
        role: "user",
        content: `${inputValue} [Context: ${history.join("; ")}]`,
      };
      const systemMessage: ChatCompletionMessageParam = {
        role: "system",
        content: BANANA_CAT_PROMPT,
      };
      const chatCompletion = await groq.chat.completions.create({
        messages: [systemMessage, newMessage],
        model: "openai/gpt-oss-20b",
        temperature: 1,
        reasoning_effort: "low",
      });

      const responseContent =
        chatCompletion.choices[0]?.message?.content || "No response";

      setMessage(responseContent);

      // save the context of the conversation
      setHistory([...history, `Me: ${inputValue}`, `You: ${responseContent}`]);

      setTalking(true);
      setTimeout(() => {
        setTalking(false);
      }, 5000);

      setInputValue("");
      return chatCompletion;
    },
    onSuccess: () => {
      setStatus("success");
    },
    onError: () => {
      const errorMessage = "Error fetching chat completion";
      setStatus("error");
      setMessage(errorMessage);
    },
  });

  const clearChat = () => {
    setHistory([]);
    setMessage("Hiiii :3 I'm a banana cat");
    setStatus("idle");
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 max-w-[600px] w-full mx-auto flex m-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault(); // Prevent the default action (newline)
              handleSendMutation();
            }
          }}
          className="flex-1 bg-white text-lg text-black font-bold p-3 rounded-l-md tracking-widest outline-none"
        />
        <button
          onClick={() => handleSendMutation()}
          className="bg-pink-400 p-3 rounded-r-md"
        >
          Send
        </button>
        <button onClick={clearChat} className="bg-red-400 p-3  ml-2 rounded-md">
          Clear Chat
        </button>
      </div>
    </>
  );
};
