    import styles from "./Footer.module.css"

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.header}>
                <img className={styles.logo} src="/logofitpower.png"/>
                <div></div>
                <div className={styles.nav}>
                    <a href="">Início</a>
                    <a href="">Produtos</a>
                    <a href="">Contato</a>
                </div>
            </div>
            <div className={styles.linha}>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Footer