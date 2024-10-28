import { create } from "zustand";
import { DarkModeProps, DarkModeStore } from "./types";

const initialData: DarkModeProps = {
  isDarkMode: false,
};

const useDarkModeStore = create<DarkModeStore>((set) => ({
  ...initialData,
  setDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
}));

export default useDarkModeStore;
