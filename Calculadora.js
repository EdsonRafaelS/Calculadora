function Calcular(){
    let num1 = Number(document.querySelector('input#num1').value)
    let num2 = Number(document.querySelector('input#num2').value)
    let operador = document.getElementsByName('operadores')
    let resultado = document.getElementById('Resultado')

    if (operador[0].checked) {
        resultado.innerHTML = `${num1} + ${num2} = ${(num1+num2).toFixed(0)}`
    }
    else if (operador[1].checked) {
        resultado.innerHTML = `${num1} - ${num0} = ${(num1-num0).toFixed(0)}`
    }
    else if (operador[2].checked) {
        if (num1 == 0 && num2 == 0 ){
            resultado.innerHTML = `${num1} / ${num2} = 0`    
        }
        else{
            resultado.innerHTML = `${num1} / ${num2} = ${(num1/num2).toFixed(2) }`
        }
    }

    else if (operador[3 ].checked){
        resultado.innerHTML = `${num1} x ${num2} = ${(num1*num2).toFixed(0)}`
    }   
    else{
        alert('[ERRO/ Nenhum operador foi definido! Tente novamente.]')
    }
}