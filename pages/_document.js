import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return(
        <Html>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <body className="bg-[#e9e7e7] box-border">
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}