;(() => {

    for(var i = 0; i <= 3; i++) {
        console.log(i) // aqui os valores 0,1,2,3 serão impressos, enqaunto o motor do node jogou o setTimeout pra call stack
        setTimeout(function() {
            console.log(i)
        }, 5000)
    }

})()

/**
 * Como a i está declarado com var, estará sempre se referindo ao mesmo endereço da variavel,
 * Com a volta do primeiro loop var será içado e sempre se referira a apenas 1 variável durante esse loop,
 * e o setTimeout irá adiar a sua call stack 'console.log' , é por isso que o valor impresso é 4.
 * 
 */