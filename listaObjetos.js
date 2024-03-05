const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joão@firma.com',
    telefones: ['11555555550','11444444440'],
};

cliente.enderecos = [{
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
}
];

cliente.enderecos.push({
    rua: 'R. Joseph Ladder',
    numero: 404,
    apartamento: false,
});

// console.log(cliente.enderecos);
// console.log(cliente.enderecos[0]['rua']);

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

console.log(listaApenasApartamentos);
