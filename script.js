let marla = document.getElementById('marla');
let squarefeet = document.getElementById('squarefeet');

marla.oninput=() => {
    let output = (parseFloat(marla.value)*272.251);
    squarefeet.value =parseFloat(output.toFixed(3));
};
squarefeet.oninput=() => {
    let output = (parseFloat(squarefeet.value)/272.251) ;
    marla.value =parseFloat(output.toFixed(3));
};