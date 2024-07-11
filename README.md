# Podcast Manager

## Descrição
O Podcast Manager é uma aplicação inspirada no estilo da Netflix, que permite centralizar diferentes episódios de podcasts separados por categoria. Este projeto visa facilitar o acesso e a organização de episódios de podcasts em formato de vídeo, proporcionando uma experiência de navegação intuitiva e agradável para os usuários.

## Funcionalidades
- Listar os episódios de podcasts em sessões de categorias: Os episódios são organizados em categorias como saúde, bodybuilder, mentalidade e humor, permitindo aos usuários explorar facilmente os conteúdos disponíveis.
- Filtrar episódios por nome de podcast: Os usuários podem realizar buscas específicas por nome de podcast, facilitando o acesso aos episódios desejados.

## Implementação
Listar os episódios de podcasts em sessões de categorias
- Endpoint: GET /api/episodes
- Descrição: Retorna uma lista de episódios de podcasts organizados por categorias.
- Exemplo de resposta:
```
[
{
"podcastName": "flow",
"episode": "CBUM - Flow #319",
"videoId": "pQSuQmUfS30",
"cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
"link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
"categories": ["saúde", "esporte", "bodybuilder"]
},
{
"podcastName": "flow",
"episode": "RUBENS BARRICHELLO - Flow #339",
"videoId": "4KDGTdiOV4I",
"cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
"link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
"categories": ["esporte", "corrida"]
}
]
```

## Filtrar episódios por nome de podcast
- Endpoint: GET /api/episodes?podcast={nome}
- Descrição: Retorna uma lista de episódios de podcast com base no nome do podcast fornecido.
- Exemplo de requisição: GET /api/episodes?podcast=flow

- ## Tecnologias Utilizadas
- TypeScript: Linguagem de programação utilizada para o desenvolvimento do projeto.
- Tsup: Ferramenta de construção e empacotamento para projetos TypeScript.
- Tsx: Compilador TypeScript que suporta a construção de projetos.
- Node.js: Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- @types/node: Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.

## Como Utilizar
- Clone este repositório.
- Instale as dependências usando npm install.
- Inicie o servidor executando start:dev.
- Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.

Licença
Este projeto está licenciado sob a MIT License.

## Contact me
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiago-luna/)

## Some Skills
![PHP](https://img.shields.io/badge/PHP-fff?style=for-the-badge&logo=php)
![LARAVEL](https://img.shields.io/badge/LARAVEL-000?style=for-the-badge&logo=laravel)
![RABITMQ](https://img.shields.io/badge/rabbitmq-E34F26?style=for-the-badge&logo=rabbitmq&logoColor=white)
![MYSQL](https://img.shields.io/badge/MySQL-fff?style=for-the-badge&logo=mysql)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/node-44883e?style=for-the-badge&logo=node.js&logoColor=black)
![Solidity](https://img.shields.io/badge/solidity-96C9F4?style=for-the-badge&logo=solidity&logoColor=black)
![Bootstrap](https://img.shields.io/badge/bootstrap-000?style=for-the-badge&logo=bootstrap&logoColor=553C7B)
[![Git](https://img.shields.io/badge/Git-000?style=for-the-badge&logo=git&logoColor=E94D5F)](https://git-scm.com/doc)
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=30A3DC)](https://docs.github.com/)