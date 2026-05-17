import { validarQuantidade } from "../src/contarPedidos.js"
import assert from 'node:assert'

describe('Testando funções de quantidade de café', function(){
    it('Deve retornar a quantidade de pedidos de café', function(){  
        let respostaQuantidade = validarQuantidade(["suco", "café", "água","café", "salgado", "café"])
        assert.strictEqual(respostaQuantidade, 3)
    })

    it('Deve retornar nenhum pedido de café', function(){  
        let respostaQuantidade = validarQuantidade([0])
        assert.strictEqual(respostaQuantidade, "Nenhum café foi pedido")
    })

    it('Deve retornar insira um dado válido', function() {
        let respostaQuantidade = validarQuantidade([null, undefined, -1])
        assert.strictEqual(respostaQuantidade, "Insira um dado válido")
    })

    


})