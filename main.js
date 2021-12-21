var pog = 0;
var cost = 10;
var increment = 1;
var costppc = 10;
var ppc = 1;
var ts = 1000;
var costts = 100;
var interval = setInterval(update, ts);

function thing() {
	pog += ppc;
    updatetext();
}

function buy() {
    if (pog >= cost) {
        pog -= cost;
        cost *= 3.2;
        increment *= 3;
        roundthings();
        updatetext();
    }
}

function buyppc() {
    if (pog >= costppc) {
        pog -= costppc;
        costppc *= 2.3;
        ppc *= 2;
        roundthings();
        update();
    }
}

function buyts() {
    if (pog >= costts) {
        pog -= costts;
        costts *= 10;
        ts *= 0.88;
        roundthings();
        update();
        clearInterval(interval);
        interval = setInterval(update, ts);


    }
}

function addsec() {
    pog += increment;
}

function update() {
    document.getElementById("headthing").innerHTML = pog;
    document.getElementById("twohead").innerHTML = "buy points per second: cost " + cost + " points";
    document.getElementById("ppc").innerHTML = "buy points per click: cost " + costppc + " points";
    document.getElementById("ts").innerHTML = "buy a tickspeed boost: cost " + costts + " points";
    document.getElementById("pps").innerHTML = "Points/s: " + increment;
    document.getElementById("ppctext").innerHTML = "Points/click: " + ppc;
    document.getElementById("tstext").innerHTML = "Tickspeed: " + ts + "ms";
    if (pog < cost) {
        document.getElementById("twohead").style.backgroundColor = "red";
    } else {
        document.getElementById("twohead").style.backgroundColor = "palegreen";
    }
    if (pog < costppc) {
        document.getElementById("ppc").style.backgroundColor = "red";
    } else {
        document.getElementById("ppc").style.backgroundColor = "palegreen";
    }
    if (pog < costts) {
        document.getElementById("ts").style.backgroundColor = "red";
    } else {
        document.getElementById("ts").style.backgroundColor = "palegreen";
    }
    addsec();
}

function updatetext() {
    document.getElementById("headthing").innerHTML = pog;
    document.getElementById("twohead").innerHTML = "buy points per second: cost " + cost + " points";
    document.getElementById("ppc").innerHTML = "buy points per click: cost " + costppc + " points";
    document.getElementById("pps").innerHTML = "Points/s: " + increment;
    document.getElementById("ppctext").innerHTML = "Points/click: " + ppc;
    if (pog < cost) {
        document.getElementById("twohead").style.backgroundColor = "red";
    } else {
        document.getElementById("twohead").style.backgroundColor = "palegreen";
    }
    if (pog < costppc) {
        document.getElementById("ppc").style.backgroundColor = "red";
    } else {
        document.getElementById("ppc").style.backgroundColor = "palegreen";
    }
    if (pog < costts) {
        document.getElementById("ts").style.backgroundColor = "red";
    } else {
        document.getElementById("ts").style.backgroundColor = "palegreen";
    }
}

function roundthings() {
    cost = Math.round(cost);
    costppc = Math.round(costppc);
    costts = Math.round(costts);
    ts = Math.round(ts)
}
