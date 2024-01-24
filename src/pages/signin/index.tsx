import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { AUTHENTICATION_PASS } from "@/constant/env";
import { useAuthContext } from "@/feature/auth/provider/AuthProvider"
import type { GlobalAuthState} from "@/types"
//import CorrectPass from "@/feature/correctPass/CorrectPass";
import "tailwindcss/tailwind.css"

const Page:NextPage = () => {
    const [password, setPassword] = useState<string>("");
    const {authState, setAuthState}:GlobalAuthState = useAuthContext();
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await new Promise((resolve,reject)=>{
            if(AUTHENTICATION_PASS === password){
                resolve("");
            }
            else reject();
        })
        .then(async()=>{
            await setAuthState(true);
        })
        .catch(async(err)=>{
            await setAuthState(false);
            window.alert("パスワードが間違っています");
            console.log(err);
        })
        console.log(authState);
    }

    return (
        <div
            className="mx-auto max-w-2xl text-center"
        >
            <div
                className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0"
            >
                <div
                    className="mx-auto max-w-xs px-8"
                >sign in</div>
                <form
                    onSubmit={handleSubmit}
                >
                    <label>
                        Password:
                        <input
                            className="border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={password}
                            name="password"
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                        />
                    </label>
                    <button
                        className="mt-10 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        type={"submit"}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>    
    )
}

export default Page;