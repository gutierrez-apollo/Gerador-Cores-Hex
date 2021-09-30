function calculate(){
    var imc;
    var result = document.getElementById("result");
    
    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    imc = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.textContent = imc;

    if(imc < 18.5){
        category = "Abaixo do Peso";
        result.style.color = "#F2BB13";
    }
    else if( imc >= 18.5 && imc <= 24.9 ){
        category = "Peso ideal";
        result.style.color = "#15b10f";
    }
    else if( imc >= 25 && imc <= 29.9 ){
        category = "Sobrepeso";
        result.style.color = "#F27405";
    }
    else{
        category = "Obesidade";
        result.style.color = "#BF1111";
    }
    document.getElementById("category").textContent = category
}