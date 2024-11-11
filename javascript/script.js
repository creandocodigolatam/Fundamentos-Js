function calcularDescuento() {
    let precio = parseFloat(document.getElementById("precio").value);
    let descuento = parseFloat(document.getElementById("descuento").value);
    const factorDescuento = (100 - descuento) / 100;
    let precioFinal = precio * factorDescuento;

    document.getElementById("precioFinal").textContent = precioFinal.toFixed(2);
}
