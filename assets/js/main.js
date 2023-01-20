function calcSmi() {
    let wgt = parseFloat(document.querySelector('#weight').value);
    let sz = parseFloat(document.querySelector('#size').value);
    sz = sz / 100;
    let smi = wgt / (sz * sz);
    smi = Math.round(smi * 100) / 100
    document.querySelector('#smi').innerText = smi;
    if (smi > 20) {
        document.querySelector('#smiResultTxt').innerHTML = 'You are perfect just as you are';
    } else if (smi < 20) {
        document.querySelector('#smiResultTxt').innerHTML += 'Eat, eat, eat, eat !';
    }
}




