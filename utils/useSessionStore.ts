import { create } from "zustand";

interface SessionState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useSessionStore = create<SessionState>((set) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
}));

export default useSessionStore;
