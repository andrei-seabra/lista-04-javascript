# Atividade Prática - Introdução ao JavaScript

## Objetivo da atividade
Este projeto consiste na implementação de uma lista de exercícios práticos utilizando HTML5, CSS3 e JavaScript puro. O objetivo principal é desenvolver habilidades fundamentais de manipulação do DOM, interação com o usuário e atualização dinâmica de elementos na página.

Ao longo dos exercícios, são abordados conceitos essenciais como seleção de elementos, manipulação de conteúdo, controle de eventos, criação dinâmica de elementos e alteração de estilos via JavaScript.

## Exercícios

### 1- Exercício
Foi criada uma página com título, parágrafo e botão.
Ao clicar no botão, o conteúdo textual dos elementos é alternado dinamicamente utilizando:
- querySelector
- textContent

Também foi utilizada uma variável de controle para alternar entre os estados.

### 2- Exercício
Neste exercício, um bloco visual tem sua aparência alterada ao clicar em um botão.

Foi utilizado:
- classList.toggle para adicionar/remover classes
- Estilização via CSS para representar visualmente a mudança

### 3- Exercício
Foi implementada uma lista de tarefas interativa, contendo:
- Campo de entrada de texto
- Botão para adicionar tarefas
- Lista dinâmica

Funcionalidades:
- Criação de elementos com document.createElement
- Inserção com appendChild
- Validação para impedir entradas vazias

### 4- Exercício
Um contador numérico foi desenvolvido com dois botões:
- Incrementar (+)
- Decrementar (-)

Características:

Uso de variável para armazenar o estado
- Atualização dinâmica do DOM
- Restrição para evitar valores negativos

### 5- Exercício
Foi criada uma interface com múltiplos elementos (cards), onde:
- Apenas um item pode estar ativo por vez
- Ao clicar em um card, ele recebe destaque
- Os demais perdem o destaque

Foram utilizados:
- querySelectorAll
- Laços de repetição para percorrer elementos
- Manipulação de classes dinamicamente