import PostModelo from "componentes/PostModelo";
import styles from "./SobreMim.module.css";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/ExCard.jpeg"
export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre Mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Thiago!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Minha foto"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>Oi, tudo bem? eu sou o Thiago, um desenvolvedor web em início de carreira com forte interesse em programação para web.
                Tenho 1 ano e 6 meses de experiência em desenvolvimento front-end, com foco em HTML, CSS, JavaScript e PHP.</p>
        </PostModelo>
    
  )
}