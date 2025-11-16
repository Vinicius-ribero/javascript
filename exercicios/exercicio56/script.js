    function calcular(){

        const montante = document.getElementById("montante");
        const principalInput = document.getElementById("principal");
        const taxaInput = document.getElementById("taxa");
        const anosInput = document.getElementById("anos");

        let principal = Number(principalInput.value);
        let taxa = Number(taxaInput.value / 100);
        let anos = Number(anosInput.value);

        if(principal < 0 || isNaN(principal)){
            principal = 0;
            principalInput.value = 0 
        }
        if(taxa < 0 ||isNaN(taxa)){
            taxa = 0;
            taxaInput.value = 0 
        }
        if(anos < 0 || isNaN(anos)){
            anos = 0;
            anosInput.value = 0 
        }

     const resultado = principal * Math.pow((1 + taxa / 1), 1 * anos);
     
     montante.textContent = resultado.toLocaleString(undefined, {
                                                    style:"currency", currency: "USD"})
    }