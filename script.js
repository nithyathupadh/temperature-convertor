
const tempInput = document.getElementById("temp-input");
const tempUnit = document.getElementById("temp-unit");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

convertBtn.addEventListener("click", function() {
    let tempValue = Number(tempInput.value);
    let tempSymbol = tempUnit.value;

    
    if (isNaN(tempValue) || tempValue === "") {
        output.textContent = "Please enter a valid temperature";
        output.style.color = "red";
    } else {
        
        let result;
        if (tempSymbol === "C") {
            result = celsiusToFahrenheit(tempValue);
            
            output.textContent = `${result.toFixed(2)} °F`;
            output.style.color = "white";
        } else if (tempSymbol === "F") {
           
            result = fahrenheitToCelsius(tempValue);
            
            output.textContent = `${result.toFixed(2)} °C`;
            output.style.color = "white";
        }
    }
});
