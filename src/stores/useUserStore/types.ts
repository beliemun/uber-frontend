export interface UserProps {
  isSignedIn: boolean;
  accessToken?: string | undefined;
}

export interface UserStore extends UserProps {
  signIn: (accessToken: string) => void;
  signOut: () => void;
  setAccessToken: (accessToken: string) => void;
}
