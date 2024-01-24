import { AuthGuard } from "@/feature/auth/component/AuthGuard/AuthGuard";
import type { NextPage } from "next";

const Page: NextPage = () => {
    return(
        <AuthGuard>
            <div className="text-3xl font-bold underline">home</div>
            <a
                href="https://docs.google.com/spreadsheets/d/1VchE4QdfXEvB_mb1x5qwqTTpjzphIWiPLj9pBvBaD3Q/edit"
            >スプシリンク
            </a>
        </AuthGuard>
    )
}

export default Page;