import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  const postDeftones = {
    titulo: "História da banda Deftones",
    autor: "Enon Demori",
    data: "22 de Abril de 2026",
    conteudo: `A banda Deftones foi formada em 1988 em Sacramento, Califórnia, inicialmente por Chino Moreno (vocal),
                Stephen Carpenter (guitarra) e Abe Cunningham (bateria). Pouco tempo depois entrou Chi Cheng no baixo,
                completando a formação clássica que marcou o início da carreira do grupo.

                Ao longo dos anos, alguns integrantes passaram pela banda. Chi Cheng foi o baixista original até sofrer
                um grave acidente em 2008, vindo a falecer em 2013. Durante esse período, Sergio Vega assumiu o baixo,
                participando das gravações e turnês por vários anos, mas deixou a banda em 2022. Além deles, Frank
                Delgado entrou oficialmente como tecladista e DJ no final dos anos 90 e permanece até hoje.
                
                Atualmente, o Deftones é composto por Chino Moreno (vocal), Stephen Carpenter (guitarra), Abe Cunningham
                (bateria) e Frank Delgado (teclados e samples). No momento, a banda está sem um baixista fixo,
                utilizando músicos convidados para cumprir essa função.`,
    imagem: "https://louderthanwar.com/wp-content/uploads/2025/06/Deftones_Piece-Hall-Halifax_Adam-Edwards-12907.jpg",
    legenda: "Deftones ao vivo em 2025, Piece Hall Halifax, Reino Unido."
  };

  const postMinhaHistoria = {
    titulo: "Minha história com a banda",
    autor: "Enon Demori",
    data: "22 de Abril de 2026",
    conteudo: `Minha história com o Deftones começou no meu ensino médio, em 2022, quando eu estava vagando pelo Spotify
                e me deparei com a música "Sextape", do álbum "Diamond Eyes". Essa música até hoje é muito especial para
                mim e, a partir daí, nunca mais parei de ouvir a discografia deles. Ao longo do tempo, o álbum "Saturday
                Night Wrist" se tornou o meu favorito e mantém esse título até hoje, um fato curioso é esse álbum ter sido lançado no ano que nasci. O Deftones é uma banda que me
                marcou muito, e eu sou muito grato por ter descoberto a música deles. Espero um dia vê-los ao vivo.`
  };

  return (
    <div className="App">
      <Header />
      <Navigation />

      <main className="conteudo-blog">
        <Article
          titulo={postDeftones.titulo}
          autor={postDeftones.autor}
          data={postDeftones.data}
          conteudo={postDeftones.conteudo}
          imagem={postDeftones.imagem}
          legenda={postDeftones.legenda}
        />

        <Sidebar />

        <Article
          titulo={postMinhaHistoria.titulo}
          autor={postMinhaHistoria.autor}
          data={postMinhaHistoria.data}
          conteudo={postMinhaHistoria.conteudo}
        />
      </main>

      <Footer />
    </div>
  );
}