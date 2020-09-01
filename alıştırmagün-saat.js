setInterval(function clock() {
    var today = new Date(),
        day = today.getDay(),
        daylist = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    console.log(daylist[day] + ".");
    var hour = today.getHours(),
        minute = today.getMinutes(),
        second = today.getSeconds(),
        year = today.getFullYear();
    milsec = today.getMilliseconds();
    console.log(daylist[day], hour, minute, second, milsec)
    document.getElementById("day").innerHTML = daylist[day];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("sec").innerHTML = second;
    document.getElementById("ms").innerHTML = milsec;
    document.getElementById("year").innerHTML = year;
})