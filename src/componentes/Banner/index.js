import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/ExCard.jpeg";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo</h1>
                <p className={styles.paragrafo}>Boas Vindas ao meu portifólio</p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Minha Foto"
                />
            </div>
                
        </div>
    )
}