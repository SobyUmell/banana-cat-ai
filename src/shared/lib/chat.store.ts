import { create } from "zustand";

type Status = "idle" | "success" | "pending" | "error";

export const useStore = create((set) => ({
  message: "Hiiii :3 I'm a banana cat",
  status: "idle",
  talking: false,
  setMessage: (message: string) => set({ message: message }),
  setStatus: (status: Status) => set({ status: status }),
  setTalking: (talking: boolean) => set({ talking: talking }),
}));
