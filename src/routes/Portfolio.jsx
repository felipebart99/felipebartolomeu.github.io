import "./Portfolio.css";
import ProjectCard from "../componentes/ProjectCard";

const Portfolio = () => {
  return (
    <div className="wrapper">
      <h2>Meus Principais projetos</h2>
      <ProjectCard
        description="Site criado para a psicóloga Raiana Monteiro, com o objetivo de apresentar seu perfil profissional e abordagem terapêutica de forma clara e acolhedora. O design moderno e minimalista transmite confiança, empatia e profissionalismo, destacando sua formação em Terapia Gestalt e sua missão de promover o autoconhecimento e o bem-estar emocional."
        imageSrc="\img\printSiteRaiana.png"
        altText="imagem 2"
        link="https://psicologaraianamonteiro.com.br/"
        github="https://github.com/felipebart99/psiRaianaMonteiro"
      />
      <ProjectCard
        description=" Trabalho freelancer desenvolvido para o engenheiro Alison Brito. O site é uma landing page criada com o construtor de sites da Hostinger. A escolha dessa plataforma permitiu entregar uma solução rápida e acessível, garantindo um site funcional e visualmente agradável, dentro do prazo e orçamento definidos."
        imageSrc="\img\alisonBritoimg.png"
        altText="imagem 2"
        link="https://alisonbritoeng.com.br"
        className="destaque"
      />

      <ProjectCard
        description="Este site foi criado para a psicóloga Pamela Sousa, com o objetivo de apresentar seu perfil profissional e abordagem terapêutica de forma clara e acolhedora. O site destaca sua formação em Terapia Gestalt, sua contínua capacitação em Psicologia e sua missão de ajudar os clientes por meio do autoconhecimento e bem-estar emocional. O layout foi desenvolvido com um design limpo e moderno, refletindo confiança, empatia e profissionalismo."
        imageSrc="\img\printSitePam.png"
        altText="imagem 2"
        link="https://psipamelasousa.com.br/"
        github="https://github.com/felipebart99/PsiPamelaSousa"
      />

      <ProjectCard
        description=" Projeto freelancer realizado para o engenheiro André Fruet. Esta landing page foi desenvolvida utilizando o construtor de sites da Hostinger, proporcionando uma solução rápida e econômica. Ao aproveitar as ferramentas da plataforma, garantimos uma entrega eficiente sem abrir mão de um design profissional e visualmente atraente."
        imageSrc="\img\image.png"
        altText="imagem 2"
        link="https://fruetengenharia.com.br"
        className="destaque"
      />
      <ProjectCard
        description="Trabalho freelancer realizado para divulgar uma feira em Caruaru, que apresenta diversas marcas de bolsas, acessórios e calçados."
        imageSrc="\img\fotoFeiraPorti.png"
        altText="imagem 2"
        link="https://feiramodanordeste.com.br"
      />
      <ProjectCard
        description="Um site moderno para a BartGym, apresentando a estrutura, os benefícios e os planos de assinatura. Possui um design limpo, navegação intuitiva e uma seção de contato para agendamento de aulas. Foi desenvolvido para atrair novos clientes e fornecer informações relevantes aos membros."
        imageSrc="\img\bartGym.png"
        altText="imagem 2"
        link="https://bart-gym.vercel.app"
        className="destaque"
        github="https://github.com/felipebart99/BartGym"
      />
      <ProjectCard
        description="Projeto de um e-commerce fictício de restaurantes, onde o usuário pode escolher entre diversas opções de restaurantes, visualizar informações detalhadas, explorar os menus, adicionar e remover itens do carrinho e finalizar a compra preenchendo os dados de entrega. Desenvolvido com React, Redux, Styled-components e integração com API."
        imageSrc="/img/Efood.png"
        altText="imagem 2"
        link="https://efood-teal-eight.vercel.app/"
      />
      <ProjectCard
        description="Desenvolvi um aplicativo em React Native para monitorar a umidade do solo. O MVP foi entregue com coleta de dados via porta serial e disponibilização em um servidor. O servidor foi desenvolvido com Node.js e Express."
        imageSrc="\img\imgDHTAPP.jpeg"
        altText="imagem 2"
        link="https://www.linkedin.com/posts/felipe-bartolomeu_foi-de-grande-import%C3%A2ncia-participar-do-activity-7266584960759726080-MD5O?utm_source=share&utm_medium=member_desktop"
        className="destaque"
        github="https://github.com/felipebart99/Horta"
      />
      <ProjectCard
        description="Site clone do Disney+, com adaptação para dispositivos móveis, hospedado na Vercel, desenvolvido utilizando Gulp e SASS."
        imageSrc="\img\disneyPlusimg.png"
        altText="imagem 2"
        link="https://clone-disneyplus-wtgy.vercel.app"
        github="https://github.com/felipebart99/clone_disneyplus"
      />
      <ProjectCard
        description="Desenvolvi um site responsivo e otimizado para SEO para uma psicóloga, com foco em melhorar a visibilidade online e facilitar o agendamento de consultas. O projeto incluiu a criação de uma interface intuitiva, integração com ferramentas de comunicação (como WhatsApp) e aplicação de boas práticas de design para garantir uma experiência fluida e acessível em todos os dispositivos."
        imageSrc="\img\vanuzaSiteimg.png"
        altText="imagem 2"
        className="destaque"
        link="https://vanuza-site.vercel.app"
        github="https://github.com/felipebart99/VanuzaSite"
      />
      <ProjectCard
        description="Desenvolvi um site para promover a série Cobra Kai, utilizando HTML, CSS e Gulp para otimizar as imagens."
        imageSrc="\img\Cobrakai.png"
        altText="imagem 2"
        link="https://cobrakai.vercel.app/"
        github="https://github.com/felipebart99/cobrakai"
      />
      <ProjectCard
        description="Criei uma lista de contatos com funções para adicionar, remover, editar e excluir entradas. Além disso, a lista possui filtro por tipo e barra de pesquisa. Utilizei React Redux neste projeto."
        imageSrc="\img\listaContatos.png"
        altText="imagem 2"
        link="https://contatos-react-redux.vercel.app/"
        className="destaque"
        github="https://github.com/felipebart99/ContatosReactRedux"
      />

      <ProjectCard
        description="Projeto de Landing Page criado com HTML, CSS e JavaScript, inspirado no jogo GTA V."
        imageSrc="/img/imgGta.png"
        altText="imagem 2"
        link="https://gta-v-mu.vercel.app"
        github="https://github.com/felipebart99/GTA-V"
      />

      <ProjectCard
        description="Site ficcional criado para a venda de um curso de inglês, desenvolvido com Bootstrap."
        imageSrc="\img\EnglishCourseimg.png"
        altText="imagem 2"
        link="https://bart-english.vercel.app"
        className="destaque"
        github="https://github.com/felipebart99/BartEnglish"
      />
      <ProjectCard
        description="Site ficcional para um hotel, desenvolvido com Bootstrap."
        imageSrc="\img\BartHotelimg.png"
        altText="imagem 2"
        link="https://bart-hotel.vercel.app"
        github="https://github.com/felipebart99/Bart-Hotel"
      />
      <ProjectCard
        description=" To-Do List desenvolvida com React, contendo funcionalidades de pesquisa, filtro, ordenação, criação, exclusão e categorização de tarefas."
        imageSrc="/img/imgTodoList.png"
        altText="imagem 2"
        link="https://todo-list-sooty-sigma-85.vercel.app"
        className="destaque"
        github="https://github.com/felipebart99/todoList"
      />
      <ProjectCard
        description="Aplicativo de clima integrado à API OpenWeather. Além da temperatura, exibe dados de umidade, velocidade do vento e condição atual do céu. Projeto desenvolvido com HTML, CSS e JavaScript."
        imageSrc="/img/imgApiClima.png"
        altText="imagem 2"
        link="https://api-clima-snowy.vercel.app"
        github="https://github.com/felipebart99/API-clima"
      />

      <ProjectCard
        description="Calculadora desenvolvida com React.js, onde utilizei pela primeira vez containers do Material UI para estruturar o layout. Este projeto me ajudou a consolidar a lógica necessária para lidar com operações matemáticas por meio do Hook useState."
        imageSrc="/img/imgCalculator.png"
        altText="imagem 2"
        link="https://calculadora-react-eta-sable.vercel.app"
        className="destaque"
        github="https://github.com/felipebart99/Calculadora-React"
      />
    </div>
  );
};

export default Portfolio;
