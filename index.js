console.log("hello world");

function myFunction(){
    let height = document.getElementById("cm-height").value/100;
    let weight = document.getElementById("kilo-weight").value;
    let bmi = Math.round(weight/(height*height));

    const calcButton = document.getElementById("calc-btn");
    const result = document.getElementById("results");
    let measure;
    if(bmi >= 30){
         measure = "Your bmi is " + bmi + " you are obese";
        
    }
    else if(bmi>18 && bmi < 25){
        measure = "Your bmi is " + bmi + " you are healthy";

    }
    else if(bmi<30 && bmi>25 ){
        measure = "Your bmi is " + bmi + " you are overweight";
    }
    else{
        measure = "Your bmi is " + bmi + " you are underweight";
    }
    if(weight<0 || height<0){
        result.innerHTML = "You can enter negative values"

    }
    else{
        result.innerHTML = measure;
    }

    
}

