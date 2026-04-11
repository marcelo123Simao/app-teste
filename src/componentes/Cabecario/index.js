import { Link, useLocation } from "react-router-dom";
import Styles from "./Cabecario.module.css";

const estilo = {
  backgroundImage:
    "linear-gradient(rgba(8, 24, 58, 0.82), rgba(20, 48, 105, 0.88)), url('/imagem/fundo-cinema.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Cabecario() {
  const location = useLocation();

  const menuItems = [
    { nome: "Home", caminho: "/" },
    { nome: "Sobre Mim", caminho: "/sobreMim" },
    { nome: "Poesias", caminho: "/poesias" },
    { nome: "Livros", caminho: "/livros" },
    { nome: "Contacto", caminho: "/contacto" },
  ];

  return (
    <header className={Styles.topoPoeta} style={estilo}>
      <div className={Styles.overlayTopo}></div>

      <div className={Styles.containerTopo}>
        <div className={Styles.topoConteudo}>
          <div className={Styles.topoImagem}>
            <img src="/imagem/expo.jpeg" alt="Marcelo Simão" />
          </div>

          <div className={Styles.topoTexto}>
            <h1>Marcelo Simão</h1>
            <span className={Styles.nomeArtistico}>O Poeta</span>

            <div className={Styles.linhaDecorativa}></div>

            <nav className={Styles.menuTopo}>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.caminho}>
                    <Link
                      to={item.caminho}
                      className={
                        location.pathname === item.caminho
                          ? Styles.linkActivo
                          : ""
                      }
                    >
                      {item.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={Styles.textoApresentacao}>
              <p>
                Olá,sou <strong>Marcelo Simão_O"Poeta"</strong>, um poeta apaixonado pela beleza das
                palavras, pela profundidade dos sentimentos e pela arte de
                transformar emoções em versos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Cabecario;
