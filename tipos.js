const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joão@firma.com',
    telefones: ['11555555550','11444444440'],
};

console.log(cliente);
cliente.telefones.push('11333333330');
console.log(cliente.telefones[2]);