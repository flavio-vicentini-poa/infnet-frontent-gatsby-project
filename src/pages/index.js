import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <img
        alt='Site banner'
        src='/home.jpeg'
        className='w-full h-full rounded-lg mb-6'
      />
      <section className='mx-16'>
        <p className='text-custom-font-primary text-justify mb-4 leading-7 text-xl'>
          Somos uma equipe apaixonada por videogames, dedicada a trazer as
          últimas notícias, análises e tendências do universo gamer. Nosso foco
          é oferecer conteúdo de qualidade sobre as plataformas que moldam a
          indústria: PC, Nintendo, Xbox e PlayStation. Aqui, você encontra
          informações atualizadas sobre lançamentos, eventos, novidades e tudo o
          que move o coração dos jogadores, sejam eles casuais ou hardcore.
        </p>
        <p className='text-custom-font-primary text-justify mb-4 leading-7 text-xl'>
          Além das notícias, buscamos explorar a cultura e a comunidade dos
          games, destacando desde inovações tecnológicas até histórias
          inspiradoras de jogadores e desenvolvedores. Valorizamos a diversidade
          de opiniões e criamos espaço para debates saudáveis e interativos,
          aproximando gamers de todas as origens e estilos. Nosso compromisso é
          ser um ponto de encontro para quem vive e respira o mundo dos jogos.
        </p>
        <p className='text-custom-font-primary text-justify mb-4 leading-7 text-xl'>
          Acreditamos que os videogames são mais do que entretenimento: são uma
          forma de arte, conexão e expressão. Por isso, trabalhamos para
          garantir que nossos leitores tenham acesso a um conteúdo rico e
          envolvente. Junte-se a nós nessa jornada pelo universo dos jogos e
          descubra, a cada clique, um novo motivo para se apaixonar por este
          universo.
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Game News</title>;
