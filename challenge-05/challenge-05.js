/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Lindemberg', 1.85, 85, 'Moreno', 'Masculino'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArr(arg){
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornarArr(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getElementoArray(arr,indice){
  return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = ['Lindemberg', 1.85, 85, 'Moreno', 'Masculino'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
getElementoArray(arr,0);
getElementoArray(arr,2);
getElementoArray(arr,3);
getElementoArray(arr,4);
getElementoArray(arr,5);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro){
  var livraria = {
    'O Pequeno Príncipe': {
        quantidadePaginas: 100,
        autor: 'Antonie d\'Saint',
        editora: 'Editora 1'
    },
      
    'Diário de um banana': {
        quantidadePaginas: 200,
        autor: 'Santos',
        editora: 'Editora 2'
    },
      
    'A menina que roubava livros': {
        quantidadePaginas: 300,
        autor: 'Sandra Maia',
        editora: 'Editora 3'
    }
  };
  
  return !livro ? livraria : livraria[livro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro O Pequeno Príncipe tem ' +  book('O Pequeno Príncipe').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O Pequeno Príncipe é ' +  book('O Pequeno Príncipe').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro O Pequeno Príncipe foi publicado pela editora ' +  book('O Pequeno Príncipe').editora);
