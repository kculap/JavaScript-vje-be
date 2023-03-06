function inflationCalculator() {
    let inflationRate = document.querySelector("#inflationRate");
    let money = document.querySelector("#money");

    //pretvaranje Stringa u decimalni broj
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);

    let years = document.querySelector("#years").value;
    years = parseFloat(years);

    //Formula za računanje inflacije
    let worth = money + (money * (inflationRate / 100));

    for (let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }

    worth = worth.toFixed(2); //skraćuje broj na dvije decimale

    let newElement = document.createElement("div");
    newElement.className = "new-value";
    newElement.innerText = `Današnjih ${money} eura, vrijedi kao ${worth} eura za ${years} godine.`;

    document.querySelector(".container").appendChild(newElement);
}