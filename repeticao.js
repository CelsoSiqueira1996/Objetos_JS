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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if(tipo === 'object' || tipo === 'function') {
        continue;
    }
    console.log(`A chave ${chave} tem o valor ${cliente[chave]} .`);
}
