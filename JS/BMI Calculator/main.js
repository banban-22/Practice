    var h = document.getElementById('height');
    var w = document.getElementById('weight');
    var button = document.getElementById('submit');

    var output = document.getElementById('result');

var calcBmi = function() {

    var h_value = h.value;
    var w_value = w.value;

    h_value /= 100;
    var bmi = w_value / (h_value * h_value);
    bmi = Math.floor(bmi * 10) / 10;

    output.innerHTML = bmi;

}
button.addEventListener('click', calcBmi);