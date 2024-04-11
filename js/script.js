const btnNumero = document.querySelectorAll('[data-numero]')
const btnOperador = document.querySelectorAll('[data-operador]')
const btnIgual = document.querySelector('[data-igual]')
const btnBorrarTodo = document.querySelector('[data-borrar-todo]')
const btnBorrar = document.querySelector('[data-borrar]')
const textoValorSuperior = document.querySelector('[data-valorsuperior]')
const textoValorInferior = document.querySelector('[data-valorinferior]')



class Calculadora{
    constructor(textoValorInferior, textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorInferior.includes('.')) return
        this.valorInferior = this.valorInferior + numero
    }

    imprimirDisplay(){
        this.textoValorInferior.innerText = this.valorInferior
        this.textoValorSuperior.innerText = this.valorSuperior
    }

    borrar(){
        this.valorInferior = this.valorInferior.slice(0,-1)
    }

    ElegirOperacion(operador){
        if(this.valorInferior == '') return
        if(this.valorSuperior != ''){
            this.realizarCalculo()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = ''
    }
    realizarCalculo(){
        let resultado
        let conversionValorSuperior = parseFloat(this.valorSuperior)
        let converionValorInferior = parseFloat(this.valorInferior)

        if(isNaN(converionValorInferior) || isNaN(conversionValorSuperior))
            return

        switch(this.operador){
            case '+':
                resultado = conversionValorSuperior + converionValorInferior
            break

            case '-':
                resultado = conversionValorSuperior - converionValorInferior
            break

            case '*':
                resultado = conversionValorSuperior * converionValorInferior
            break

            case '/':
                resultado = conversionValorSuperior / converionValorInferior
            break

            default: return
        }
        
        

        this.valorInferior = resultado
        this.operador = undefined
        this.valorSuperior = ''

    }

    limpiarPantalla(){
        this.valorInferior =''
        this.valorSuperior = ''
        this.operador = undefined
    }
}

const calculadora = new Calculadora(textoValorInferior, textoValorSuperior)


btnNumero.forEach(boton => {
    boton.addEventListener('click',() => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay()
    })
})


btnBorrar.addEventListener('click',() =>{
    calculadora.borrar()
    calculadora.imprimirDisplay()

})

btnOperador.forEach(boton => {
    boton.addEventListener('click',() => {
        calculadora.ElegirOperacion(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

btnIgual.addEventListener('click',() =>{
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()

})

btnBorrarTodo.addEventListener('click',() =>{
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()

})