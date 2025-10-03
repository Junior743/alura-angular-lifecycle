# Life Cycle - Aplicativo de Lista de Compras

Este projeto é um aplicativo de lista de compras desenvolvido como parte do curso da Alura para demonstrar e explorar os hooks de ciclo de vida (Lifecycle Hooks) de componentes do Angular.

## Descrição

O aplicativo permite que os usuários criem, editem, excluam e gerenciem uma lista de compras. Os itens da lista são salvos no `localStorage` do navegador, garantindo que os dados persistam entre as sessões. O foco principal do projeto é a utilização prática de hooks como `ngOnInit` e `ngDoCheck` para controlar o estado e o comportamento dos componentes.

## Funcionalidades

- **Adicionar Itens**: Adicione novos itens à sua lista de compras.
- **Editar Itens**: Modifique o nome dos itens existentes.
- **Excluir Itens**: Remova itens individualmente da lista.
- **Limpar Lista**: Remova todos os itens da lista de uma só vez.
- **Persistência de Dados**: A lista é salva automaticamente no `localStorage` do navegador.

## Tecnologias Utilizadas

- **Angular**: Framework principal para a construção da interface.
- **TypeScript**: Linguagem base para o desenvolvimento com Angular.
- **FontAwesome**: Biblioteca de ícones para elementos visuais como o ícone de lixeira.
- **Prettier**: Ferramenta para formatação de código, garantindo um estilo consistente.

## Como Executar o Projeto

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16.x ou superior)
- [Angular CLI](https://angular.io/cli) instalado globalmente:
  ```bash
  npm install -g @angular/cli
  ```

### Instalação

1. Clone o repositório para sua máquina local.
2. Navegue até o diretório raiz do projeto.
3. Instale as dependências do projeto com o seguinte comando:
   ```bash
   npm install
   ```

### Servidor de Desenvolvimento

Execute o comando abaixo para iniciar o servidor de desenvolvimento do Angular.
```bash
npm start
```
ou
```bash
ng serve
```
Após a execução, acesse `http://localhost:4200/` em seu navegador para ver a aplicação em funcionamento.

### Build

Para criar uma versão de produção do projeto, execute:
```bash
npm run build
```
Os arquivos otimizados para produção serão gerados no diretório `dist/life-cycle`.

## Scripts Disponíveis

No `package.json`, os seguintes scripts estão disponíveis:

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run watch`: Compila o projeto em modo de desenvolvimento e observa as alterações nos arquivos.
- `npm run test`: Executa os testes unitários via Karma.
- `npm run format`: Formata o código-fonte usando o Prettier.