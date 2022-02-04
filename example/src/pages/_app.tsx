import "../styles/styles.css"

import SEO from "@bradgarropy/next-seo"
import type {AppProps} from "next/app"
import {ReactElement} from "react"

import GoogleAnalytics from "../../../dist"
import pkg from "../../package.json"

const App = ({Component, pageProps}: AppProps): ReactElement => {
    return (
        <>
            <GoogleAnalytics
                measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
            />

            <SEO
                title={pkg.name}
                description={pkg.description}
                keywords={pkg.keywords}
                icon="/favicon.ico"
                facebook={{
                    image: "https://next-starter.bradgarropy.vercel.app/facebook.png",
                    url: "https://next-starter.bradgarropy.vercel.app",
                    type: "website",
                }}
                twitter={{
                    image: "https://next-starter.bradgarropy.vercel.app/twitter.png",
                    site: "@bradgarropy",
                    card: "summary",
                }}
            />

            <Component {...pageProps} />
        </>
    )
}

export default App
