import { contabilizarQuantidadeDeCafe, contabilizarQuantidadeDeItens } from '../src/contarPedidoAula.js';
import assert from 'node:assert'

describe('Testes de gestão de cafeteria', function(){
    
    it('TC 1 - Ao menos 1 café na lista', function(){
        const ListaPedidos = [
            {nome: "café", valor: 4.00},
            {nome: "bolo de cenoura", valor: 12.00},
            {nome: "café com leite", valor: 5.00}
        ]
        const retornoEsperado = 1

        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(ListaPedidos)

        assert.equal(retornoEsperado, quantidadeDeCafes)

    })

    it('TC 2 - Não ter nenhum café na lista', function(){
        const ListaPedidos = [
            {nome: "bolo de cenoura", valor: 12.00},
            {nome: "café com leite", valor: 5.00}
        ]
        const retornoEsperado = 0

        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(ListaPedidos)

        assert.equal(retornoEsperado, quantidadeDeCafes)

    })

    it('TC 3 - Ter 2 ou mais café na lista', function(){
        const ListaPedidos = [
            {nome: "café", valor: 4.00},
            {nome: "bolo de cenoura", valor: 12.00},
            {nome: "café com leite", valor: 5.00},
            {nome: "café", valor: 4.00}
        ]
        const retornoEsperado = 2

        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(ListaPedidos)

        assert.equal(retornoEsperado, quantidadeDeCafes)

    })

    it('TC 4 - Retornar umalista de pedidos vazia', function(){
        const ListaPedidos = []
        const retornoEsperado = 0

        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(ListaPedidos)

        assert.equal(retornoEsperado, quantidadeDeCafes)

    })


    it('TC 5 - Filtrar por um item específico na lista', function(){
        const ListaPedidos = [
            {nome: "café", valor: 4.00},
            {nome: "bolo de cenoura", valor: 12.00},
            {nome: "café com leite", valor: 5.00},
            {nome: "café", valor: 4.00}
        ]
        const itemPesquisado = "bolo de cenoura"
        const resutadoEsperado = 1

        const quantidadedeItem = contabilizarQuantidadeDeItens(itemPesquisado, ListaPedidos)

        assert.equal(resutadoEsperado, quantidadedeItem)

    })

})