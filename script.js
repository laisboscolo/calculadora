
    const soma = ()=>{
    //getelement r para puxar o ID
        let nu1 =  parseFloat(document.getElementById("n1").value)// document para ir ao html |parsefloat pra somar numero decimal
        let nu2 =  parseFloat(document.getElementById("n2").value)//value= pra dizer que o valor tem que ir para a variavel
        let resultado = (nu1) + (nu2)
        window.alert("Olá, a soma dos números é " + resultado)
    
    }


    const subtracao = ()=>{
        //getelement r para puxar o ID
            let nu1 =  parseFloat(document.getElementById("n1").value)// document para ir ao html |parsefloat pra somar numero decimal
            let nu2 =  parseFloat(document.getElementById("n2").value)//value= pra dizer que o valor tem que ir para a variavel
            let resultado = (nu1) - (nu2)
            window.alert("Olá, a subtração dos números é " + resultado)
        
        }

    
    const multiplicacao = ()=>{
    //getelement r para puxar o ID
        let nu1 =  parseFloat(document.getElementById("n1").value)// document para ir ao html |parsefloat pra somar numero decimal
        let nu2 =  parseFloat(document.getElementById("n2").value)//value= pra dizer que o valor tem que ir para a variavel
        let resultado = (nu1) * (nu2)
        window.alert("Olá, a multiplicação dos números é " + resultado)
    
    }

    
    const divisao = ()=>{
    //getelement r para puxar o ID
        let nu1 =  parseFloat(document.getElementById("n1").value)// document para ir ao html |parsefloat pra somar numero decimal
        let nu2 =  parseFloat(document.getElementById("n2").value)//value= pra dizer que o valor tem que ir para a variavel
        let resultado = (nu1) / (nu2)
        window.alert("Olá, a divisão dos números é " + resultado)
    
    }