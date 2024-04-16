
import Header from "./components/Header"
import Footer from "./components/Footer"
import Conteudo from "./components/Main";
import Depoimentos from "./components/Depoimentos";
import Informacoes from "./components/Informacoes";


function App() {
  return (
    <div>
      <Header />
      <Informacoes />
      <Conteudo />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default App;
