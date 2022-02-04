import Footer from "components/Footer"
import Header from "components/Header"
import {FC} from "react"

import styles from "./Layout.module.css"

const Layout: FC = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
