    const input = document.querySelector(".input");
    const output = document.querySelector(".output");

    function bEncriptar (){
        const textoEncriptado = encriptar(input.value)
        output.value = textoEncriptado
        input.value = "";
        output.style.backgroundImage = "none";
    }
 
    function encriptar(forEncriptar){
        let matriz = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
        forEncriptar = forEncriptar.toLowerCase()
        for (let i = 0; i < matriz.length; i++){
            if (forEncriptar.includes(matriz[i][0])){
                forEncriptar = forEncriptar.replaceAll(matriz[i][0], matriz[i][1])

            }
        }
        return forEncriptar
    }  

    function bDesencriptar (){
        const textoEncriptado = desencriptar(input.value)
        output.value = textoEncriptado
    }

    function desencriptar(forDesencriptar){
        let matriz = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
        forDesencriptar = forDesencriptar.toLowerCase()
        for (let i = 0; i < matriz.length; i++){
            if (forDesencriptar.includes(matriz[i][1])){
                forDesencriptar = forDesencriptar.replaceAll(matriz[i][1], matriz[i][0])

            }
        }
        return forDesencriptar
    }  

    function copy() {
        let copyText = document.querySelector(".output");
        copyText.select();
        document.execCommand("copy");
        output.value = "";
        alert ("Texto copiado")
    }


    //  La letra "e" es convertida para "enter"
    //  La letra "i" es convertida para "imes"
    //  La letra "a" es convertida para "ai"
    //  La letra "o" es convertida para "ober"
    //  La letra "u" es convertida para "ufat"