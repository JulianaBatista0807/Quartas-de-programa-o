import {validarAcessoCinema} from "../src/"
import assert from 'node:test'

describe('Testando funções de acesso ao cinema', function (){
    
    it('Idade deve ser positiva', function () {
        let respostaAcesso = validarAcessoCinema(-1, "L")
        assert.equal(respostaAcesso, "Não Permitido")
    })
    
    it('Classificação livre deve ser permitida para todas as idades', function(){
        let respostaAcesso = validarAcessoCinema(10, "L")
        assert.equal(respostaAcesso, "Permitido")
    })

    it('Se idade for nula deve ser Não Permitido', function(){
        let respostaAcesso = validarAcessoCinema(null, "L")
        assert.equal(respostaAcesso, "Não Permitido")
    })

    it('Se classificação for nula deve ser Não Permitido', function(){
        let respostaAcesso = validarAcessoCinema(15, null)
        assert.equal(respostaAcesso, "Não Permitido")
    })
    it('Verificar que quando uma idade é inferior a classificação retorna Não Permitido', function(){
        let respostaAcesso = validarAcessoCinema(10, "16")
        assert.equal(respostaAcesso, "Não Permitido")
    })
    it('Verificar que quando uma idade é igual a classificação retorna Permitido', function(){
        let respostaAcesso = validarAcessoCinema(16, "16")
        assert.equal(respostaAcesso, "Permitido")
    })

})