export function contabilizarQuantidadeDeCafe(listaPedidos){
    let quantidadeCafe = 0;
    for(let i = 0; i < listaPedidos.length; i++){
        if(listaPedidos[i]. nome == "café"){
            quantidadeCafe = quantidadeCafe + 1;
        }

    }
    return quantidadeCafe;

}

export function contabilizarQuantidadeDeItens(itemEsperado, listaPedidos){
    let quantidadeItemEsperado = 0;
    for (let i = 0; i < listaPedidos.length; i++) {
        if (listaPedidos[i].nome == itemEsperado) {
            quantidadeItemEsperado++;
        }
    }
    return quantidadeItemEsperado;


}