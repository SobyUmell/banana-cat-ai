import { create } from "zustand";

type Status = "idle" | "success" | "loading" | "error";

export type ChatStore = {
  message: string;
  status: Status;
  talking: boolean;
  setMessage: (message: string) => void;
  setStatus: (status: Status) => void;
  setTalking: (talking: boolean) => void;
};

export const useStore = create<ChatStore>((set) => ({
  message: "Hiiii :3 I'm a banana cat",
  status: "idle",
  talking: false,
  setMessage: (message: string) => set({ message: message }),
  setStatus: (status: Status) => set({ status: status }),
  setTalking: (talking: boolean) => set({ talking: talking }),
}));
