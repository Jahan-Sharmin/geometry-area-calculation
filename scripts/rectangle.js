function rectanagleArea() {
    const rectangleWidth = document.getElementById('rectagle-width');
    const width = parseFloat(rectangleWidth.value);

    const rectanglelength = document.getElementById('rectangle-length');
    const length = parseFloat(rectanglelength.value);
    const rectanagleArea = width * length;
    
    const rectangleAreaSapn = document.getElementById('rectanagle-Area')
    rectangleAreaSapn.innerText = rectanagleArea;

}