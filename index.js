let unit;
let res_value=document.getElementsByClassName("result");
document.getElementById('celcius').onchange = function () {
    unit = 'celcius';
};
document.getElementById('farenheit').onchange = function () {
    unit = 'farenheit';
};
document.getElementById('kelvin').onchange = function () {
    unit = 'kelvin'; 
};

function reset() {
    (res_value)[0].innerHTML ="";
    (res_value)[1].innerHTML ="";
    (res_value)[2].innerHTML ="";
    document.getElementById(unit).value="";
}
let cel_value, far_value, kel_value;

function convert() {
    if (unit === 'celcius') {
        var cel = parseFloat(document.getElementById(unit).value);
        cel_value=cel;
        far_value = cel * 9 / 5 + 32;
        kel_value =cel + 273;
    }
    else if (unit === 'farenheit') {
        var far = parseFloat(document.getElementById(unit).value);
        cel_value = (far - 32) * 5 / 9;
        far_value=far;
        kel_value = cel_value + 273;
    }
    else if (unit === 'kelvin') {
        var kel=parseFloat(document.getElementById(unit).value);
        cel_value = kel - 273;
        far_value = cel_value * 9 / 5 + 32;
        kel_value=kel;
    }
    document.getElementById("cel-res").innerHTML = "Temperature in Celcius is : \n"+cel_value.toFixed(2);
    document.getElementById("far-res").innerHTML ="Tenperature in Farenheit is : \n"+ far_value.toFixed(2);
    document.getElementById("kel-res").innerHTML ="Temperature in Kelvin is : \n"+ kel_value.toFixed(2);
}
