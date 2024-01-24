import type { AppProps } from "next/app";
import { initializeFirebaseApp } from "@/lib/firebase/firebase";
//import { getApp } from "@firebase/app";
import { AuthProvider } from "@/feature/auth/provider/AuthProvider";
import { Header } from "@/component/base/Header/Header";
import Seo from "@/component/base/Header/Seo";
import "tailwindcss/tailwind.css";

initializeFirebaseApp();

function MyApp({Component,pageProps}:AppProps){
    //console.log(getApp());
    return (
        <AuthProvider>
            <Seo 
                title={"α-SYS"}
            />
            <Header />
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp;