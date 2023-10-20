import styles from "./Header.module.css"

function Header(){
    return(
        <div className={styles.header}>
            <img className={styles.logo} src="/logofitpower.png"/>
            <div></div>
            <div className={styles.nav}>
                <a href="">Início</a>
                <a href="">Produtos</a>
                <a href="">Contato</a>
                <a href=""><img className={styles.icone} src="/carrinho.png" alt=""/></a>
                <a href=""><img className={styles.icone} src="/coracao.png" alt=""/></a>
            </div>
        </div>
    )
}

export default Header