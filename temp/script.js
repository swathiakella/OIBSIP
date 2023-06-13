function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultDiv = document.getElementById('result');
  
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
  
    if (isNaN(temperature)) {
      resultDiv.innerText = 'Please enter a valid temperature.';
      return;
    }
  
    let convertedTemperature, convertedUnit;
    if (unit === 'celsius') {
      convertedTemperature = (temperature * 9/5) + 32;
      convertedUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
      convertedTemperature = (temperature - 32) * 5/9;
      convertedUnit = 'Celsius';
    }
  
    resultDiv.innerText = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
  }