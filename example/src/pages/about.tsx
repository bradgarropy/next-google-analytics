import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {FC} from "react"

const AboutPage: FC = () => {
    return (
        <Layout>
            <SEO title="about" />
            <p>about</p>
        </Layout>
    )
}

export default AboutPage
