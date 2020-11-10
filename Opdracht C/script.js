var tafels = [2,4,6,8];

for(var i = 0; i < tafels.length; i++){
    var element = document.createElement("H2");
    var printText = document.createTextNode("Tafel van " + tafels[i]); 
    element.appendChild(printText);
    document.body.appendChild(element);
    for(var x = 1; x <=10; x++){
        document.write(tafels[i] * x + "<br>")
    }
}


