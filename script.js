/*async function fetchData(SourceCountry, DestinationCountry) {
    // Use backticks for template literals
    const url = `https://forex-convertor.p.rapidapi.com/getExchangeRate?from=${SourceCountry}&to=${DestinationCountry}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '162dd0aa20msh43f14bd4b438e73p108361jsnc93e2e7c5c78',
            'x-rapidapi-host': 'forex-convertor.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse the JSON result
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}*/

// After getting the data from the API
var FromCountry = document.getElementById('From_Country');
var USD = document.querySelector('label[for="tab1"]');
var Euro = document.querySelector('label[for="tab2"]');
var Yen = document.querySelector('label[for="tab3"]');
var ConvertButton = document.querySelector('.btn-title');

// DIRECT options
USD.addEventListener("click", function() {
    FromCountry.value = "USD";
});
Euro.addEventListener("click", function() {
    FromCountry.value = "EUR";
});
Yen.addEventListener("click", function() {
    FromCountry.value = "JPY"; 
});


ConvertButton.addEventListener('click',  function() {
    var SourceCountry = document.getElementById('From_Country').value;
    var SourceCountryAmount = document.getElementById('Initial_Amount');
    const DestinationCountry = document.getElementById('To_Country').value;
    const DestinationCountryAmount = document.getElementById('Final_Amount');

    if (parseFloat(SourceCountryAmount.value) < 0 ) {
        alert("Sorry, You cannot enter number below 0");
        return;
    }
    else if (SourceCountry == DestinationCountry){
        alert("Sorry, the currency can't be converted for same country");
        return;
    }
    
    const ConvertedAmount=SourceCountryAmount.value*1.07;
    DestinationCountryAmount.value=ConvertedAmount.toFixed(2);
    /*
    const exchangeRate = await fetchData(SourceCountry, DestinationCountry);
    
    if (exchangeRate && exchangeRate.rate) {
        const ConvertedAmount = parseFloat(SourceCountryAmount.value) * exchangeRate.rate;
        DestinationCountryAmount.value = ConvertedAmount.toFixed(2); // Convert to string with 2 decimal places
    } else {
        console.log("Error fetching exchange rate or invalid data received.");
    }*/
    
    console.log(SourceCountry);
    console.log(ConvertedAmount);
    console.log(SourceCountryAmount.value);
    console.log(DestinationCountry);
    console.log(DestinationCountryAmount.value);
});
