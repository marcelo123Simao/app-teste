import { Link } from "react-router-dom";
import Styles from "./Cabecario.module.css";
  function Cabecario() {
    return (
    <header className={Styles.topo_poeta}>
  <div className={Styles.overlay_topo}></div>

  <div className={Styles.container_topo}>
    <div className={Styles.topo_conteudo}>
      <div className={Styles.topo_imagem}>
        <img src="./imagem/banner.webp" alt="Ricardo Almeida" />
      </div>

      <div className={Styles.topo_texto}>
     <h1>Marcelo Simão_O"Poeta"</h1>
    <p className={Styles.subtitulo}> ------------ POETA ----------- </p>

        <nav className={Styles.menu_topo}>
          <ul>
            
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/Sobre mim">SOBRE MIM</Link></li>
            <li><Link to="/Poesias">POESIAS</Link></li>
            <li><Link to="/Livros">LIVROS</Link></li>
           <li><Link to="/Contacto">CONTACTO</Link></li>
          </ul>
        </nav>
      </div>
    </div>
        </div>
        </header>
    )
}
export default Cabecario;