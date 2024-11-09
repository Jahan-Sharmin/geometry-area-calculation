//parallelogram

function parallelogramArea() {
     const base = getInputValue('parallelogram-base')
     const width = getInputValue('parallelogram-width')
     const area = 0.5 * base * width;
     setInputValue('parallelogram-area', area);

}


//Rhombus
  function rhombusArea() {
     const diagonal1 = getInputValue('rhombus-diagonal1')
     const diagonal2 = getInputValue('rhombus-diagonal2')
     const area = 0.5 * diagonal1 * diagonal2;
      setInputValue('rhombus-area', area);

 }
//pentagon

 function pentagonArea() {
      const perimeter = getInputValue('pentagon-perimeter')
      const apothem = getInputValue('pentagon-apothem')
      const area = 0.5 * perimeter * apothem;
     setInputValue('pentagon-area', area);

 }

//ellips

function ellipsArea() {
    const major = getInputValue('ellipse-major')
     const minor = getInputValue('ellipse-minor')
     const area = 3.1416 * major * minor;
     setInputValue('ellipse-area', area);
     
 }


function getInputValue(inputFieldId) {
    const inputfield = document.getElementById(inputFieldId);
    const inputValue = parseFloat(inputfield.value);
    return inputValue;
}
function setInputValue(spanValue, area) {
    const spanInput = document.getElementById(spanValue);
    spanInput.innerText = area;

}
