const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //1. adicionar novo nome na lista de usuário
        adicionarNovoUsuario({
            nome:  'Maria',
            email: 'maria@gospel.com'
        });

        //2. retornar a lista de usuário na lista de usuário
        const listaDeUsuarios = retornarUsuarios();

        //3. comparar se o novo nome está no fim da lista de usuários
        expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        expect(listaDeUsuarios.at(-1).email).to.equal('maria@gospel.com');
    });
});