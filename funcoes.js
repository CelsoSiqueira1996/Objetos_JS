const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joão@firma.com',
    telefones: ['11555555550','11444444440'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if(valor > this.saldo) {
            console.log('Saldo insuficiente.');
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo} R$.`);
        }
    },
};

cliente.efetuaPagamento(250);
cliente.efetuaPagamento(153);

