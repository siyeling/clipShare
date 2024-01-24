import { SITE_URL } from "@/constant/env";
import { MetaTypes } from "@/types";
import Head from "next/head";
import { useRouter } from "next/router";

const Seo = ({
    title,
    description,
    ogType,
    imgUrl,
}:MetaTypes)=>{
    const router = useRouter();
    const siteUrl = SITE_URL;
    const url = `${siteUrl}${router.asPath}`;
    //const siteTitle = `${title} - ${titleTemplate}`;
    return (
        <Head>
            <meta name="viewport" content={"width=device-width, initial-scale=1"}/>
            <meta name="robots" content="noindex"/>
            <meta property="og:image" content={imgUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <title>{title}</title>
            <link rel="icon" type="image/ico" href={"/favicon/favicon.ico"} />
        </Head>
    )
}

export default Seo;