const naoPermitido = "Não Permitido"
const permitido = "Permitido"

export function validarAcessoCinema(idade, classificacao) {
    if (idade < 0 || idade === null) {
        return naoPermitido
    }
    if (classificacao === "L") {
        return permitido
    } else if(idade < Number(classificacao)) {
        return naoPermitido
    }
   
}