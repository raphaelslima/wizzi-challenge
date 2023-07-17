# Wizzi Turismo inteligente - tech_challenge

Teste técnico para a vaga de Desenvolvedor Front-end Júnior.

## Como rodar o projeto:

### Pelo deploy:

Acessar o link: https://wizzi-challenge.vercel.app/

### Localmente:

1. Clonar o projeto do repositório.

2. Executar o comando para baixar as dependências: "npm i"

3. Executar o comando para rodar a aplicação: "npm run start"

4. Caso queiram rodar os testes, executar o comando: "npm run test"

## Planejamento:

Para solucionar esse desafio, primeiramente pesquisei um pouco sobre formulários de checkout de viagem já existentes para entender as outras regras de negócio presentes para a validação desses formulários que não estavam presentes nos requisitos do teste.

Posteriormente, estruturei o layout, dividindo cada elemento do layout em um componente e usando a plheta de cores do site da Wizzi Turismo Inteligente.

Por fim, estando ciente das regras de negócio e de como seria layout da aplicação escolhi as tecnologias que iria usar para a realização desse desafio de uma forma que cumpra todos os critérios da avaliação e demonstre o meu conhecimento das minhas hard skills que tenham mais match com a vaga. Mesmo sendo uma aplicação pequena, que só uma pessoa desenvolve e sem muita possibilidade de crescimento, optei por implementar testes unitários para demonstrar meu conhecimento.

## Tecnologias utilizadas:

<ul>

  <li>TypeScript</li>

  <li>ReactJS</li>

  <li>HTML</li>

  <li>SASS</li>

  <li>Jest</li>

</ul>

## Sobre a aplicação:

Essa aplicação se baseia em um formulário que valida os dados das entradas, ele possui validação de campos obrigatórios, o campo de viajantes adultos não pode ser zero, a origem não pode ser igual ao destino, data de ida precisa ser maior que a data de hoje e menor que a data de volta e a data de volta precisa ser maior que a data de ida, todas as mensagens de erros são mostradas embaixo das entradas.

Validando esses dados, as entradas e o botão de envio do formulário são desabilitados e uma mensagem de sucesso é mostrada na tela junto ao um botão que o usuário pode fazer uma nova marcação de viajem e reabilitar todas as entradas.

## Ficaria feliz com Feedbacks:

E-mail: raphaeldesousalm@gmail.com

Linkdin: https://www.linkedin.com/in/raphaellima98/
