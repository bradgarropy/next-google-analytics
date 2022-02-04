import Link from "@bradgarropy/next-link"
import {FC} from "react"

import styles from "./Navigation.module.css"

const Navigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            <Link to="/" className={styles.link}>
                Home
            </Link>

            <Link to="/about" className={styles.link}>
                About
            </Link>
        </nav>
    )
}

export default Navigation
