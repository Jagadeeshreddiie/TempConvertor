let unit;
document.getElementById('celcius').onchange = function () {
    unit = 'celcius';
};
document.getElementById('farenheit').onchange = function () {
    unit = 'farenheit';
};
document.getElementById('kelvin').onchange = function () {
    unit = 'kelvin';
};
let cel_value, far_value, kel_value;

function convert() {
    var cel = parseFloat(document.getElementById('celcius').value);
    var far = parseFloat(document.getElementById('farenheit').value);
    var kel = parseFloat(document.getElementById('kelvin').value);
    if (unit === 'celcius') {
        cel_value=cel;
        far_value = cel * 9 / 5 + 32;
        kel_value =cel + 273;
    }
    else if (unit === 'farenheit') {
        cel_value = (far - 32) * 5 / 9;
        far_value=far;
        kel_value = cel_value + 273;
    }
    else if (unit === 'kelvin') {
        cel_value = kel - 273;
        far_value = cel_value * 9 / 5 + 32;
        kel_value=kel;
    }
    document.getElementById("cel-res").innerHTML = "Temperature in Celcius is : \n"+cel_value.toFixed(2);
    document.getElementById("far-res").innerHTML ="Tenperature in Farenheit is : \n"+ far_value.toFixed(2);
    document.getElementById("kel-res").innerHTML ="Temperature in Kelvin is : \n"+ kel_value.toFixed(2);
    
    
}
function reset() {
    document.getElementsByClassName("result")[0].innerHTML ="";
    document.getElementsByClassName("result")[1].innerHTML ="";
    document.getElementsByClassName("result")[2].innerHTML ="";
    document.getElementById(unit).value="";
}