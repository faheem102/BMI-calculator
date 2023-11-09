console.log("hello world");

function myFunction(){
    let height = document.getElementById("cm-height").value/100;
    let weight = document.getElementById("kilo-weight").value;
    let bmi = Math.round(weight/(height*height));

    const calcButton = document.getElementById("calc-btn");
    const result = document.getElementById("results");
    if(bmi >= 30){
        result.innerHTML = "Your bmi is " + bmi + " you are obese";
        
    }
    else if(bmi>18 && bmi < 25){
        result.innerHTML = "Your bmi is " + bmi + " you are healthy";

    }
    else if(bmi<30 && bmi>25 ){
        result.innerHTML = "Your bmi is " + bmi + " you are overweight";
    }
    else{
        result.innerHTML = "Your bmi is " + bmi + " you are underweight";
    }

    
}

