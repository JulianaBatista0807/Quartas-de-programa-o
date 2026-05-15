import {validarAcessoCinema} from "../src/"
import assert from 'node:test'

describe('Testando funções de acesso ao cinema', function (){
    
    it('Idade deve ser positiva', function () {
        let respostaAcesso = validarAcessoCinema(-1, "L")
        assert.strictEqual(respostaAcesso, "Idade inválida")
    })
    
    it('Classificação livre deve ser permitida para todas as idades', function(){
        let respostaAcesso = validarAcessoCinema(5, "L")
        assert.strictEqual(respostaAcesso, "Pode assistir apenas a filmes de classificação livre")
    })
})