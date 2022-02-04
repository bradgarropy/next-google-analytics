import Navigation from "components/Navigation"
import {FC} from "react"

import styles from "./Header.module.css"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <Navigation />
            </div>
        </header>
    )
}

export default Header
