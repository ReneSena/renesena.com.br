import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Avatar from "../components/Avatar";

import * as S from "../components/Sobre/styled";

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre" />
    <S.Container>
        <h1>
          <Avatar />
            Olá, seja bem vindo(a)!
        </h1>
        <p>
          Me chamo Rene Sena. Atualmente, trabalho como Desenvolvedor Front-end na Docket Brasil.
          Iniciei na área efetivamente em 2018, após a conclusão da graduação em Análise e Desenvolvimento de Sistemas pela Universidade de Mogi das Cruzes. 
          Antes do meu inicio, eu trabalhei por 5 anos na área Logística e Administrativa, e não, eu não pensava em seguir em algumas dessa áreas. Arquitetura e Tecnologia sempre foram os meus queridinhos, foi então que cursei Edificações pela ETEC e foi um experiência incrível.
        </p>
          
        <p>
          Porém, em um dado momento, precisei escolher qual caminho seguir, e foi uma decisão difícil a princípio, porém importante e que mudou minha vida. 
          O fato de conseguir entregar valor para as pessoas/empresas, levar experiências que ajudem elas a resolverem seus problemas e ver o impacto direto causado em suas rotinas com soluções tecnológicas, foi o que me ganhou, e inevitavelmente foi o gatilho pra essa decisão.
        </p>
       
        <p>
          A web pra mim sempre foi fascinante, e se aventurar dentro do seu mundo, me revelou novas formas de pensar e ver perspectivas que eu jamais imaginariam que existiam. Eu sou uma pessoa muita curiosa, e gosto de entender os processos que permeam a criação de uma ideia. 
          Por buscar compreender como as coisas funcionam, acabo me aventurando e me desafiando em busca dessas respostas e isso me da ensumo pra estar sempre evoluindo.
          Gosto de aprender coisas novas e compartilhar aquilo que aprendo com as pessoas, acredito que essa é uma forma de fixar os conhecimentos adquiridos, e tornar essa troca de informação rica para ambos, e isso me levou a criação desse blog.
        </p>

        <p>
          Eu amo trabalhar em equipe, acredito que a contribuição de todos, leva o time, à chegar nas melhores respostas e consequentemente nos melhores resultados.
        </p>
        
        <p>
          Gosto muito de trocar figurinhas sobre tecnologias, desenvolvimento pessoal, culinária, finanças, esportes radicais e tudo que for interessante. Bora comigo nessa jornada?!
        </p>
    </S.Container>
  </Layout>
)

export default AboutPage