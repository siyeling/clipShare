import { useAuthContext } from "@/feature/auth/provider/AuthProvider"
import type { GlobalAuthState } from "@/types";
import Link from "next/link";
import "tailwindcss/tailwind.css"

export const Header = () => {
    const {authState}:GlobalAuthState = useAuthContext()
    return(
        <nav
            className="bg-indigo-600 flex justify-between py-3"
        >
            <span
                className=""
            >
                <Link
                    href="/"
                    className="text-white rounded-md px-3 py-2 text-xl font-medium underline"
                    onClick={()=>authState ? "" : window.alert("ログインしていません")}
                >
                    home
                </Link>
                <Link
                    className="text-white rounded-md px-3 py-2 text-xl font-medium underline"
                    href="share"
                    onClick={()=>authState ? "" : window.alert("ログインしていません")}
                >
                    share
                </Link>
            </span>
            <span
                className="absolute text-white flex-1 rounded-md px-3 py-2 text-sm font-medium justify-end"
            >
                {authState ? "Login" : "Logout"}
            </span>
        </nav>
    )
}

//block text-white rounded px-3 py-2 text-sm font-medium underline