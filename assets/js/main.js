const calcButton = document.getElementById('calc');
const resultContainer = document.getElementById('result-container');


calcButton.addEventListener('click',function(){
    



    const smallerValue = document.getElementById('smaller-value').value;
    const ratioValue = document.getElementById('ratio-value').value;
    const initialDate= document.getElementById('initial-month').value;
    const lastDate = document.getElementById('last-month').value;

    if(smallerValue == "" || ratioValue == "" || initialDate == "" || lastDate == "" || smallerValue < 0 || ratioValue < 0){
        alert('Campos vazios ou inválidos');
        
    }else{
        resultContainer.classList.add("show");  
        const installmentsContainer = document.getElementById('installments-container');
        installmentsContainer.innerHTML = "";
        const monthsContainer = document.getElementById('months-container');
        monthsContainer.innerHTML = "";
        const amountContainer = document.getElementById("amount-container");
        amountContainer.innerHTML = "";

        const initialMonth = initialDate.substr(5);
        const lastMonth = lastDate.substr(5);
        const monthNumber = ((lastMonth - initialMonth) + 1); 
        let installments = [];
        let amountValue = 0;
    
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
        
    
        for(let i = (Number(initialMonth) - 1); i < Number(lastMonth); i++){
            console.log(i);
            const currentMonth = months[i];
            months[i] = document.createElement("p");
            months[i].className = "month";
            monthsContainer.appendChild(months[i]);
            months[i].innerHTML =  currentMonth;
            
        }
    
        for(let i = 0; i < monthNumber; i++){
            /*===================== INSTALLMENTS =====================*/
            let currentCalc = (((i+1) - 1) * Number(ratioValue) + Number(smallerValue));
            installments.push(Number(currentCalc)) ;
            const currentInstallment = installments[i];
            console.log(installments[i]);
            installments[i] = document.createElement("p");
            installments[i].className = "installment";
            installmentsContainer.appendChild(installments[i]);
            installments[i].innerHTML =  currentInstallment;
            amountValue+=Number(currentInstallment);
            console.log(amountValue)
        }   
        
        
        const amount = document.createElement("p");
        amount.className = "amount-content";
        amountContainer.appendChild(amount);
        amount.innerHTML = "Total:  R$" + amountValue;
        
    
        
        
    
        console.log(smallerValue, ratioValue, initialDate, lastDate, initialMonth, lastMonth, monthNumber);
    }

    


})
