import { BananaCatCanvas } from "./widgets/banana-cat-canvas";
import { Loader } from "@react-three/drei";
import { BananaCatChat } from "./widgets/banana-cat-chat";
import { ChatBubble } from "./widgets/chat-bubble";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChatBubble />
        <BananaCatCanvas />
        <BananaCatChat />
        <Loader />
      </QueryClientProvider>
    </>
  );
}

export default App;
