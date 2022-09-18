// Formulas del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}  

console.groupEnd();

//Hola mundo


// Formulas del triangulo
console.group("Triangulos");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


// Formulas del circulo
console.group("Círculo");

function diametroCirculo (radio) {
    return radio * 2
}

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio)
    return diametro * Math.PI
} 

function areaCirculo (radio) {
    return (radio * radio) * Math.PI
}

console.groupEnd();


// Interacción con HTML, los botones y las funciones asociadas

function calcularPerimetroCuadrado () {
    const input = document.getElementById("inputCuadrado")
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert("El perimetro del cuadrado es: "+perimetro+"cm")
}

function calcularAreaCuadrado () {
    const input = document.getElementById("inputCuadrado")
    const value = input.value
    const area = areaCuadrado(value)
    alert("El area del cuadrado es de: "+area+ "cm^2")
}

function calcularPerimetroTriangulo () {
    const input1 = document.getElementById("inputTrianguloIzquierdo")
    const lado1 = parseInt(input1.value) 
    const input2 = document.getElementById("inputTrianguloDerecho")
    const lado2 = parseInt(input2.value) 
    const input3 = document.getElementById("inputTrianguloBase")    
    const base = parseInt(input3.value)
    const perimetro = perimetroTriangulo(lado1, lado2, base)
    alert("El perimetro del triangulo es: "+perimetro+"cm")
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTrianguloBase")
    const base = input1.value
    const input2 = document.getElementById("inputTrianguloAlura")
    const altura = input2.value
    const area = areaTriangulo(base, altura)
    alert("hola")
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo")
    const radio = input.value
    const perimetro = perimetroCirculo(radio)
    alert("El perimetro del circulo es: "+perimetro+"cm")
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo")
    const radio = input.value
    const area = areaCirculo(radio)
    alert("El area del circulo es: "+area+"cm^2")
}

//hola mundo




