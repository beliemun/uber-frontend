import { create } from "zustand";
import { UserProps, UserStore } from "./types";

const initialData: UserProps = {
  isSignedIn: false,
};

const useUserStore = create<UserStore>((set) => ({
  ...initialData,
  signIn: () => {},
  signOut: () => {},
}));

export default useUserStore;
