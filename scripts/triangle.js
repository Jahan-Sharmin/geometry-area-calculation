function calculateTriangleArea() {
    const trianglebaseinput = document.getElementById('triangle-base');
    const trianglebaseValue = trianglebaseinput.value;
    const base = parseFloat(trianglebaseValue);
    console.log(base)
    const triangleheigthinput = document.getElementById('triangle-heigth');
    const triangleheigthValue = triangleheigthinput.value;
    const heigth = parseFloat(triangleheigthValue);
    console.log(heigth);
    const area = 0.5 * base * heigth;
    const spanValue = document.getElementById('triangle-Area');
    spanValue.innerText = area;

}
