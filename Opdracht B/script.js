var arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];



function optellen(array, array2) {
    for (var i = 0; i <= 9; i++) {
        var result = array[i] + array2[i];
        document.getElementById("optel").innerHTML += array[i] + "+" + array2[i] + " = " + result + "<br>";
    }
}

function aftrekken(array, array2) {
    for (var i = 0; i <= 9; i++) {
        var result = array[i] - array2[i];
        document.getElementById("aftrek").innerHTML += array[i] + "-" + array2[i] + "=" + result + "<br>";
    }
}

function vermenigvuldigen(array, array2) {
    for (var i = 0; i <= 9; i++) {
        var result = array[i] * array2[i];
        document.getElementById("vermenigvuldigen").innerHTML += array[i] + "-" + array2[i] + "=" + result + "<br>";
    }
}

function delen(array, array2) {
    for (var i = 0; i <= 9; i++) {
        var result = array[i] / array2[i];
        document.getElementById("delen").innerHTML += array[i] + "/" + array2[i] + "=" + result + "<br>";
    }
}




optellen(arrayEen, arrayEen);
aftrekken(arrayTwee, arrayEen)
vermenigvuldigen(arrayEen, arrayTwee)
delen(arrayTwee, arrayEen)