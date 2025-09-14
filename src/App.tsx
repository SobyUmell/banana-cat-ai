import { BananaCatCanvas } from "./widgets/banana-cat-canvas";
import { Loader } from "@react-three/drei";
import { BananaCatChat } from "./widgets/banana-cat-chat";
import { ChatBubble } from "./widgets/chat-bubble";

function App() {
  return (
    <>
      <ChatBubble />
      <BananaCatCanvas />
      <BananaCatChat />
      <Loader />
    </>
  );
}

export default App;
