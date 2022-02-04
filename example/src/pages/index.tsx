import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {FC} from "react"

const IndexPage: FC = () => {
    return (
        <Layout>
            <SEO title="next starter" />
            <p>home</p>
        </Layout>
    )
}

export default IndexPage
