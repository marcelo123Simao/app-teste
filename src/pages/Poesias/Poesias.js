import { useEffect, useState } from "react";
import Cabecario from "../../componentes/Cabecario";
import Rodape from "../../componentes/Rodape";
import dados from "../../poesias.json";
import Styles from "./Poesias.module.css";

function Poesias() {
  const [poesias, setPoesias] = useState([]);

  useEffect(() => {
    const apenasPoesias = dados.filter(
      (item) => item.categoria === "poesias"
    );
    setPoesias(apenasPoesias);
  }, []);

  const abrirWhatsApp = (titulo) => {
    const numero = "244951456711";
    const mensagem = `Olá, quero saber mais sobre a poesia: ${titulo}`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  };

  return (
    <>
      <Cabecario />

      <main className={Styles.poesiasPage}>
        <div className="container">

          <h2 className={Styles.titulo}>
            ✍️ Minhas Poesias
          </h2>

          <div className={Styles.grid}>
            {poesias.map((poesia) => (
              <div key={poesia.id} className={Styles.card}>

                <div className={Styles.imgBox}>
                  <img src={poesia.imagem} alt={poesia.titulo} />
                </div>

                <div className={Styles.cardBody}>
                  <h3>{poesia.titulo}</h3>

                  <p>{poesia.descricao}</p>

                  
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
              ✍️ SOLICITAR PEDIDO NO WHATSAPP
            </a>
          </div>

        </div>
      </main>

      <Rodape />
    </>
  );
}

export default Poesias;