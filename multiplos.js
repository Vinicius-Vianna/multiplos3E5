function multiplos() {

    var n1 = document.getElementById('valor').value;
    
    var mulT3 = 0;
    var mulT5 = 0;

    for (let i = 0; i < n1; i++) {
        if (i % 3 === 0 && i !== 0) {
            mulT3++;
        }
        if (i % 5 == 0 && i !== 0) {
            mulT5++;
        }

        document.getElementById('txtV').innerHTML = n1

        document.getElementById('mult3').innerHTML = "Tem " + mulT3 + " de multiplos de 3";

        document.getElementById('mult5').innerHTML = "Tem " + mulT5 + " de multiplos de 5";
    }

}