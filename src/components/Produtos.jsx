import styles from "./Produtos.module.css"

function Produtos(){
    return(
        <div>
            <h1 className={styles.vendidos}>Os mais vendidos</h1>
            <div className={styles.produtos}>
                <div className={styles.arruma}>
                    <div className={styles.card}>
                        <div id={styles.bgcard} className={styles.cardimg}></div>
                        <div className={styles.cardinfo}>
                            <p className={styles.cardtitulo}>Camiseta Thavage Branca</p>
                            <div className={styles.cardprecomais}>
                                <p className={styles.preco}>R$ 129,99</p>
                                <div className={styles.cardmais}>
                                    <p className={styles.vejamais}>Veja Mais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.arruma}>
                    <div  className={styles.card}>
                        <div id={styles.bgcard2} className={styles.cardimg}></div>
                        <div className={styles.cardinfo}>
                            <p className={styles.cardtitulo}>Camiseta Thavage Verde</p>
                            <div className={styles.cardprecomais}>
                                <p className={styles.preco}>R$ 129,99</p>
                                <div className={styles.cardmais}>
                                    <p className={styles.vejamais}>Veja Mais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.arruma}>
                    <div className={styles.card}>
                        <div id={styles.bgcard3} className={styles.cardimg}></div>
                        <div className={styles.cardinfo}>
                            <p className={styles.cardtitulo}>Camiseta regata MAX</p>
                            <div className={styles.cardprecomais}>
                                <p className={styles.preco}>R$ 129,99</p>
                                <div className={styles.cardmais}>
                                    <p className={styles.vejamais}>Veja Mais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.arruma}>
                    <div className={styles.card}>
                        <div id={styles.bgcard4} className={styles.cardimg}></div>
                        <div className={styles.cardinfo}>
                            <p className={styles.cardtitulo}>Camiseta VAYU Preta</p>
                            <div className={styles.cardprecomais}>
                                <p className={styles.preco}>R$ 129,99</p>
                                <div className={styles.cardmais}>
                                    <p className={styles.vejamais}>Veja Mais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Produtos