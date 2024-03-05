const cliente = {
    nome: 'André',
    idade: 32,
    CPF: '11122233345',
    email: 'andre@dominio.com'
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os três primeiros dígitos do CPF são ${cliente.CPF.substring(0,3)}.`);