let brojac = 0;

document.getElementById("decreaseBtn").onclick = function() {
    brojac -=1
    document.getElementById("brojac").innerHTML = brojac
}

document.getElementById("increaseBtn").onclick = function() {
    brojac +=1
    document.getElementById("brojac").innerHTML = brojac
}

document.getElementById("resetBtn").onclick = function() {
    brojac = 0
    document.getElementById("brojac").innerHTML = brojac
}