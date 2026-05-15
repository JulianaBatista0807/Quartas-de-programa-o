
function classificarIdade(idade) {
    if (idade < 10 && idade >= 0) {
        return "Pode assistir apenas a filmes de clássificação livre";
    } else if (idade === 10 || idade === 11) {
        return "Pode assistir filmes com classificação de até 10 anos";
    } else if (idade === 12 || idade === 13){
        return "Pode assistir filmes com classificação de até 12 anos";
    } else if (idade === 14 || idade === 15) {
        return "Pode assistir filmes com classificação de até 14 anos";
    } else if (idade === 16 || idade === 17) {
        return "Pode assistir filmes com classificação de até 16 anos";
    } else if(idade >= 18) {
        return "Pode assistir a todos os filmes";
    } else {
        return "Idade inválida";
    }
}

console.log(classificarIdade(9));
console.log(classificarIdade(10));
console.log(classificarIdade(12));
console.log(classificarIdade(14));
console.log(classificarIdade(16));
console.log(classificarIdade(18));