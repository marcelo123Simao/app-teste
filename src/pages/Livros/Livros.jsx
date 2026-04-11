import { useEffect, useState } from "react";
import Cabecario from "../../componentes/Cabecario";
import Rodape from "../../componentes/Rodape";
import dados from "../../poesias.json";
import Styles from "./Livros.module.css";

function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const apenasLivros = dados.filter(
      (item) => item.categoria === "livros"
    );
    setLivros(apenasLivros);
  }, []);

  const comprarWhatsApp = (titulo) => {
    const numero = "244951456711";
    const mensagem = `Olá, quero solicitar a compra do livro: ${titulo}`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  };

  return (
    <>
      <Cabecario />

      <main className={Styles.livrosPage}>
        <div className="container">

          <h2 className={Styles.titulo}>
            📚 Meus Livros
          </h2>

          <div className={Styles.grid}>
            {livros.map((livro) => (
              <div key={livro.id} className={Styles.card}>

                <div className={Styles.imgBox}>
                  <img src={livro.imagem} alt={livro.titulo} />
                </div>

                <div className={Styles.cardBody}>
                  <h3>{livro.titulo}</h3>

                  <p>Livro do autor</p>

                  <a
                    href={comprarWhatsApp(livro.titulo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.btn}
                  >
                    SOLICITAR A COMPRA
                  </a>
                </div>

              </div>
            ))}
          </div>

          <div className={Styles.footerBtn}>
            <a
              href="https://wa.me/244951456711"
              target="_blank"
              rel="noopener noreferrer"
            >
              📲 COMPRA NO WHATSAPP
            </a>
          </div>

        </div>
      </main>

      <Rodape />
    </>
  );
}

export default Livros;