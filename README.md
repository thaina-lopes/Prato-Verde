# Prato-Verde

<h4 align="center"> 
    :construction:  Projeto em construção  :construction:
</h4>

### App de receitas veganas :fork_and_knife::herb:

O objetivo do projeto é criar um app de receitas onde é possível ver, buscar, favoritar e compartilhar receitas. O layout vai ter como foco inical dispositivos móveis, sendo posteriormente adaptado para telas maiores.

## :hammer: Funcionalidades

- Buscar receitas por ingrediente, nome ou primeira letra;
- Acessar os detalhes de cada receita, com ingredientes e instruções;
- Favoritar e desfavoritar receitas;
- Compartilhar receitas nas redes sociais;
- Acessar o perfil do usuário com as receitas favoritas;

## :memo: Etapas do projeto
> [!IMPORTANT]
`Clique na seta para ver a lista de cada etapa.`

<details>
  <summary> <b>Tela de Login</b></summary>
  
1. [ ] Desenvolver a tela de formulário com input de nome, e-mail, senha e botão de login.
2. [ ] Desenvolver a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos.
3. [ ] Após a submissão do formulário, salve no localStorage o nome do usuário na chave `user`.
4. [ ] Redirecionar o usuário para a tela principal de receitas após a submissão e validação com sucesso do login.

</details>
<details>
  <summary> <b>Tela principal de receitas</b> </summary>
  
1. [ ] Implementar o header de acordo com a necessidade de cada tela.
2. [ ] Implementar os botões de categoria para serem utilizados como filtro.
3. [ ] Implementar o filtro das receitas por meio da API ao clicar no filtro de categoria.
4. [ ] Implementar o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro.
5. [ ] Redirecionar o usuário para a tela de perfil ao clicar no botão de perfil.
6. [ ] Desenvolver o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la.
7. [ ] Implementar 2 radio buttons na barra de busca: Ingrediente e Nome da receita.
8. [ ] Caso a busca retorne mais de uma receita, renderize as 6 primeiras encontradas, exibindo a imagem e o nome de cada uma.
9. [ ] Implementar o menu superior posicionando-o de forma fixa e contendo os ícones de menu.
10. [ ] Redirecionar a pessoa usuária para a tela correta ao clicar em cada ícone no menu.
11. [ ] Redirecionar o usuário ao clicar no card da receita, para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL.
12. [ ] Realizar uma request para a API passando o id da receita que deve estar disponível nos parâmetros da URL.
   
</details>
<details>
<summary> <b>Tela de detalhes da receita</b> </summary>
  
1. [ ] Desenvolver a tela de modo que contenha a imagem da receita, o título, uma lista de ingredientes seguidos pelas quantidades, instruções de preparo e um botão de compartilhar.
2. [ ] O botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard.

</details>
<details>
<summary> <b>Tela de receitas favoritas</b> </summary>
  
1. [ ] Possuir a foto da receita, nome, um botão de compartilhar e um de "desfavoritar".
2. [ ] O botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard.
3. [ ] O botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela.
4. [ ] Ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.

</details>
<details>
<summary> <b>Tela de perfil do usuário</b> </summary>
  
1. [ ] Possuir o nome do usuário digitado no login.
2. [ ] Implementar 3 botões: um de "Receitas favoritas", um de "Início" e um de "Sair".
3. [ ] Ao clicar no botão de "Receitas favoritas", a rota deve mudar para a tela de receitas favoritas.
4. [ ] Ao clicar no botão de "Início", a rota deve mudar para a tela de início.
5. [ ] Ao clicar no botão de "Sair", o localStorage deve ser limpo e a rota deve mudar para a tela de login.

</details>

## :computer: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo e dar o seguinte comando para iniciar o projeto:

- Clone o repositório:
```bash
git clone https://github.com/thaina-lopes/prato-verde.git
```

- Entre no arquivo do projeto
```bash
cd Prato-Verde
```
- Instale as dependências
```bash
npm install
```

- Inicialize o projeto
```bash
npm start
```

## :green_heart: Autora

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/thaina-lopes">
        <img src="https://avatars.githubusercontent.com/u/130593695?v=4" width="100px;" alt="Foto da Thainá Lopes no GitHub"/><br>
      </a>
    </td>
  </tr>
</table>
