const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joão@firma.com',
    telefones: ['11555555550','11444444440'],
};

cliente.endereco = {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
};

console.log(cliente);
console.log(cliente.endereco.rua);
console.log(cliente.endereco['numero']);
console.log(cliente['endereco']['complemento']);