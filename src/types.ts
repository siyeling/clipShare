import { ReactNode } from "react";

export type Props = {
    children:ReactNode
}

export type GlobalAuthState = {
    authState: boolean,
    setAuthState:React.Dispatch<React.SetStateAction<boolean>>
}

export type Chat = {
    message:string
}

export type MetaTypes = {
    title?: string;
    titleTemplate?: string;
    description?: string;
    ogType?: string;
    imgUrl?: string;
};