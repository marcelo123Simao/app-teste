import Styles from "./Sobre_mim.module.css";
function Sobre_mim({paragrafo}){
    return (
        <section class={Styles.sobre_mim_poeta}>
  <div class={Styles.container_sobre}>
    <div class={Styles.sobre_conteudo}>
      <div class={Styles.sobre_imagem}>
        <img src="./imagem/impacto.jpeg" alt="Ricardo escrevendo" />
      </div>

      <div class={Styles.sobre_texto}>
        <p>
          {paragrafo}
        </p>

        <div class={Styles.sobre_tags}>
          <span>♡ Sensibilidade</span>
          <span>✎ Inspiração</span>
          <span>❥ Vida</span>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
export default Sobre_mim