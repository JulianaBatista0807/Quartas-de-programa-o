export function validarQuantidade(pedidos) {
    let contador = 0;
    for(let i = 0; i < pedidos.length; i++) {
        if (pedidos[i] === "café") {
            contador++;
        }
        else if (pedidos[i] === 0) {
            return "Nenhum café foi pedido"
        }
        else if(pedidos[i] === null || pedidos[i] === undefined || pedidos[i] < 0) {
            return "Insira um dado válido"
        }
    }
    return contador;
}
