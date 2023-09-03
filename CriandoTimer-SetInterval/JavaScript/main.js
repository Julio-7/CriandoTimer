function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-Br',{
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio')
let segundos = 0
let timer

function IniciaRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

document.addEventListener('click', function(event){

    const elemento = event.target
    
    if(elemento.classList.contains('iniciar')){

        relogio.classList.remove('pausado')
        clearInterval(timer)//aqui eu garanto que nao crio dois timer na mesma página
        IniciaRelogio()

    }
    if(elemento.classList.contains('pausar')){

        clearInterval(timer)
        relogio.classList.add('pausado')
    
    }
    if(elemento.classList.contains('zerar')){

        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
        relogio.classList.remove('pausado')

    }
})