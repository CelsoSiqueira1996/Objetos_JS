const objPersonagem = {
    nome: 'Gandalf',
    calsse: 'Mago',
    nivel: 20,
    aliado: {
        nome: 'Saruman',
        classe: 'Mago',
    },
    status: 'desaparecido',
};

console.log(objPersonagem.aliado.nome);
delete objPersonagem.aliado;
delete objPersonagem['status'];
console.log(objPersonagem);