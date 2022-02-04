import {FC} from "react"

import styles from "./Footer.module.css"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>Footer</p>
            </div>
        </footer>
    )
}

export default Footer
