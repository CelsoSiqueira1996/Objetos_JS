const clientes = require('./clientes.json');

function ordenar(lista, chave) {
    return lista.sort((a, b) => {
        if(a[chave] < b[chave]){
            return -1;
        }
        if(a[chave] > b[chave]) {
            return 1
        } 
        return 0;
    }) 
}

const clientesOrdenados = ordenar(clientes, 'nome');
console.log(clientesOrdenados);