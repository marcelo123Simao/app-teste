import dados from "../../poesias.json";
import Cabecario from "../../componentes/Cabecario";
import Categoria, {categorias} from "../../componentes/Categoria";
import Sobre_mim from "../../componentes/Sobre mim";
import Rodape from "../../componentes/Rodape";
//import Divisoria from "./componentes/Divisoria";
//mport Rodape from "./componentes/Rodape";

//FAZENDO ASSIM NÓS TEREMOS UMA CATEGORIA SE REPETINDO DINAMICAMENTE APENAS UMA VEZ
/*{categorias.map((cat, index) => (
          <Categoria
            key={index}
            titulo={cat.titulo}
            subtitulo={cat.subtitulo}
            dados={dados}
            tipo={cat.tipo}
          />
        ))}*/


function Home() {
  return (
    <>
      <Cabecario />
      <Sobre_mim paragrafo="Sou Marcelo Simão_O 'Poeta' 
      um poeta apaixonado pela beleza das palavras 
      e pela profundidade dos sentimentos.
      Escrevo sobre o amor, a saudade
       e os mistérios da vida." />
      
      {categorias.map((cat, index) => (
          <Categoria
            key={index}
            titulo={cat.titulo}
            subtitulo={cat.subtitulo}
            dados={dados}
            tipo={cat.tipo}
          />
        ))}
      <Rodape />
    </>
  );
}
export default Home;
