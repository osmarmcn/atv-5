// 1 atividade
// let animais = ['Cachorro', 'Gato', 'Papagaio'];


// animais.push('Tartaruga');


// animais.shift();  
// animais.unshift('Coelho');  


// animais[1] = 'Hamster'; 


// console.log("Comprimento atual do array:", animais.length);


// console.log("Elemento na posição 1:", animais[1]);


// console.log("Array final:", animais);

// 2 atividade


let cores = ['Vermelho', 'Verde', 'Azul'];


cores.push('Amarelo', 'Roxo');


cores.splice(1, 1, 'Laranja', 'Marrom');


let novasCores = cores.slice(0, 2);


let coresString = cores.join(', ');


cores.reverse();


console.log("Array cores:", cores);
console.log("Array novasCores:", novasCores);
console.log("String com todas as cores:", coresString);
