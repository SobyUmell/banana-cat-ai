import { useStore } from "../../../shared/lib/chat.store";

export const ChatBubble = () => {
  const message = useStore((state) => state.message);
  const status = useStore((state) => state.status);

  return (
    <div className="fixed top-0 right-0 max-w-[400px] max-h-[600px] overflow-y-scroll w-full p-3 m-4 bg-white rounded-lg z-20 text-black">
      <div className="font-bold text-pink-400">Banana Kitty</div>
      {status === "loading" && (
        <div className="flex gap-1 items-center pt-2">
          <img
            src="/bananacat.png"
            alt="silly kitty"
            className="w-[50px] animate-bounce"
          />
          <div className="text-pink-400 animate-pulse">Loading...</div>
        </div>
      )}
      {status === "error" && <div className="text-red-500">{message}</div>}
      {(status === "success" || status === "idle") && (
        <div className="text-black">{message}</div>
      )}
    </div>
  );
};
