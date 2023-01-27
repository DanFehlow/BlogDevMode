# BlogDevMode
Projeto para aperfeiçoamento em Vanilla JavaScript.

Este projeto foi criado com intuito de aperfeiçoamento da lógica em JavaScript, assim como a aplicação dos conhecimentos em HTML e CSS.

![image](https://user-images.githubusercontent.com/86863914/214446556-5e0bacad-fe6b-4a3e-98f9-591a2bc09904.png)

1 - Para a interação do usuário com o botão de "Adicionar Agora", foi necessário a criação de um modal, no qual a função para tornar o mesmo "ativo" se da no momento do click neste botão.

![image](https://user-images.githubusercontent.com/86863914/214446853-cc68f0c0-d12d-4be6-9cd8-93f7ae21b09f.png)


2 - Após o preechimento de todos os campos, os valores destes inputs são armazenados no LocalStorage com uma chave definida para que consigamos acessar os valores mesmo estando em uma outra página.
Assim como a utilização da captura destes valores para a visualização do conteúdo.

![image](https://user-images.githubusercontent.com/86863914/214447619-57ca6f6c-6a47-473f-84f3-0d4e250abd03.png)


3 - Também foi adicionado o botão de adicionar no "Feed" de posts, facilitando ao usuário adicionar um novo post a qualquer momento:

![image](https://user-images.githubusercontent.com/86863914/214448521-93447773-6021-4d1e-ab26-761a3d437b47.png)

4 - Assim que o post é clicado, o usuário é levado para uma nova página (denominada de post.html) onde encontrará a abertura do post clicado, contendo mais informações.
5- Os valores dos inputs como dito anteriormente são capturados pelo LocalStorage e estruturados e estilizados com a manipulação de DOM.

6 - Como podemos observar, a pagina de post possui 3 botões, sendo eles (Novo, Editar e Excluir).
7 - O botão de Novo, chama a mesma função que o botão utilizado no "Feed de Posts".
8 - O botão de Editar, abre ao usuário na mesma Guia do Navegador (utilizando o Window.open com o atributo "_self"), os campos com os valores atuais para a edição requisitada, conforme abaixo:

![image](https://user-images.githubusercontent.com/86863914/214450346-744890fb-7e6d-471f-a52d-3cbff0834b54.png)

9 - O botão de Excluir abre ao usuário um modal, com o mesmo racional do modal utilizado no passo "1", este modal fornece ao usuário duas opções, a primeira para cancelar a exclusão e a segunda para confirmar a exclusão, vide abaixo:

![image](https://user-images.githubusercontent.com/86863914/214450770-6d51ba6a-c6be-45e9-8865-efbac42ef914.png)

10 - Ao clicar em "Não" a ação é cancelada e o usuário é levado novamente para a postagem.
11 - Ao clicar em "Deletar" com a captura do index daquele post no LocalStorage, é executado o "splice" deste post no armazenamento, retirando todas as informações cadastradas anteriormente no LocalStorage e na sequência levando o usuário novamente para a pagina de "Feed de Posts". 