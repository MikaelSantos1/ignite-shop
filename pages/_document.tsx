import { Html, Head, NextScript,Main } from "next/document"
import { getCssText } from "../src/styles"

export default function Document(){
    return(
        <html>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonimous'/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet"/>
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </html>
    )
}