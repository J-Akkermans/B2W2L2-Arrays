const days = ['Maandag', 'Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag','Zondag.'];



// Alle dagen in de week
for (i = 0; i < days.length; i++){
    document.getElementById("week").innerHTML +=  days[i] + " ";
}

// Werkdagen
for (i = 0; i < 5; i++){
    document.getElementById("werkdagen").innerHTML +=  days[i] + " ";
}

// Weekend
for (i = 5; i < 7; i++){
    document.getElementById("weekendDagen").innerHTML +=  days[i] + " ";
}

// inverted week
for (i = 6; i >= 0; i--){
    document.getElementById("invertedWeek").innerHTML +=  days[i] + " ";
}

// invertedwork
for (i = 4; i >= 0; i--){
    document.getElementById("invertedWork").innerHTML +=  days[i] + " ";
}

// Inverted week
for (i = 6; i >= 5; i--){
    document.getElementById("invertedWeekend").innerHTML +=  days[i] + " ";
}