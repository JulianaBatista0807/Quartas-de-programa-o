import {validarAcessoCinema} from "../src/"
import assert from 'node:test'

describe('Testando funções de acesso ao cinema', function (){
    
    it('Idade deve ser positiva', function () {
        let respostaAcesso = validarAcessoCinema(-1)
        assert.strictEqual(respostaAcesso, "Idade inválida")
    })
    
    it('Classificação livre deve ser permitida para todas as idades', function(){
        let respostaAcesso = validarAcessoCinema(5)
        assert.strictEqual(respostaAcesso, "Pode assistir apenas a filmes de classificação livre")
    })

    it('Se a idade for igual a 10 deve ser permitido assistir filmes com classificação de até 10 anos', function(){
        let respostaAcesso = validarAcessoCinema(10)
        assert.strictEqual(respostaAcesso, "Pode assistir filmes com classificação de até 10 anos")
    })

    it('Se a idade for igual a 12 deve ser permitido assistir filmes com classificação de até 12 anos', function(){
        let respostaAcesso = validarAcessoCinema(12)
        assert.strictEqual(respostaAcesso, "Pode assistir filmes com classificação de até 12 anos")
    })

    it('Se a idade for igual a 14 deve ser permitido assistir filmes com classificação de até 14 anos', function(){
        let respostaAcesso = validarAcessoCinema(14)
        assert.strictEqual(respostaAcesso, "Pode assistir filmes com classificação de até 14 anos")
    })              

    it('Se a idade for igual a 16 deve ser permitido assistir filmes com classificação de até 16 anos', function(){
        let respostaAcesso = validarAcessoCinema(16)
        assert.strictEqual(respostaAcesso, "Pode assistir filmes com classificação de até 16 anos")
    })

    it('Se a idade for igual ou maior que 18 deve ser permitido assistir a todos os filmes', function(){
        let respostaAcesso = validarAcessoCinema(18)
        assert.strictEqual(respostaAcesso, "Pode assistir a todos os filmes")
    })

    it('Se a idade for igual ou maior que 99 deve ser permitido assistir a todos os filmes', function(){
        let respostaAcesso = validarAcessoCinema(99)
        assert.strictEqual(respostaAcesso, "Pode assistir a todos os filmes")
    
    })

    

})