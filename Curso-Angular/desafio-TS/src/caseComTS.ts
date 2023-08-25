type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligarPara(heroi: Hero): string{
    return 'Ligando para: ' + heroi.telefone;
}

ligarPara({
    nome: 'Felipe',
    vulgo: 'Capitão America',
    telefone: '11 0000000',
});