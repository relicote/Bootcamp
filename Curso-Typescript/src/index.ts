type heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: heroi){
    console.log(pessoa);
}

printaObjeto({
    name: 'Bruce Wayne',
    vulgo: 'Batman',
});