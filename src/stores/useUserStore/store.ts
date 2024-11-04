import { create } from "zustand";
import { UserProps, UserStore } from "./types";

const initialData: UserProps = {
  isSignedIn: false,
  accessToken: undefined,
};

const useUserStore = create<UserStore>((set) => ({
  ...initialData,
  signIn: (accessToken: string) => set({ isSignedIn: true, accessToken }),
  signOut: () => set({ isSignedIn: false, accessToken: undefined }),
  setAccessToken: (accessToken: string) => set({ accessToken }),
}));

export default useUserStore;
