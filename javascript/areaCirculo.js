function calcularArea() {
    const pi = 3.1416;
    let radio = document.getElementById("radio").value;
    let area = pi * radio * radio;

    document.getElementById("resultado").textContent = area.toFixed(2);
}
