import Cabecario from "../../componentes/Cabecario";
import Container from "../../componentes/Container";
import Categoria, { categorias } from "../../componentes/Categoria";
import Rodape from "../../componentes/Rodape";
import dados from "../../poesias.json";
import Styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Cabecario />

      <main className={Styles.home}>
        <section className={Styles.categoriasSection}>
          <Container>
            {categorias.map((cat, index) => (
              <Categoria
                key={index}
                titulo={cat.titulo}
                subtitulo={cat.subtitulo}
                dados={dados}
                tipo={cat.tipo}
              />
            ))}
          </Container>
        </section>

        <section className={Styles.fraseSection}>
          <Container>
            <div className={Styles.fraseBox}>
              <h2>
                “Cada verso é uma parte da alma transformada em eternidade.”
              </h2>

              <p>
                Descubra poesias, sentimentos e livros que falam diretamente ao
                coração.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Rodape />
    </>
  );
}

export default Home;