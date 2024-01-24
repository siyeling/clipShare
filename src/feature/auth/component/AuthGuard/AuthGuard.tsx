import { useAuthContext } from "../../provider/AuthProvider";
import { useRouter } from "next/router";
import type { Props, GlobalAuthState } from "@/types"

export const AuthGuard = ({children}: Props) => {
    const { authState }:GlobalAuthState = useAuthContext();
    const router = useRouter();

    if(!router.isReady){
        return (
            <></>
        )
    }

    if(authState === false){
        router.push("/signin");
        return null;
    }

    console.log(router);

    return (
        <>
            {children}
        </>
    )
}