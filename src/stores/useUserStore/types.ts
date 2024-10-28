export interface UserProps {
    isSignedIn : boolean
}

export interface UserStore extends UserProps{
    signIn : () => void;
    signOut : () =>void;
}