import "App.css";
import { panfleto } from "planfleto.pdf";
function App() {
  <div class="bg">
    <div>
      <h1>Ofertas e Promoções</h1>
      <p>Confira nossas melhores ofertas e promoções do momento!</p>
      <a href="">
        <button class="btnfundo">Aproveite Agora</button>
      </a>
      <a href={panfleto} type="application/pdf" download="Panfleto">
        <button class="btnsemfundo">Baixe o Panfleto</button>
      </a>
    </div>
    <aside></aside>
  </div>;
}
export default App;
