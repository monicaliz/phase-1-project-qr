//color
const mainColorPicker = document.querySelector('#color');
const qrColorPicker = document.querySelector('#color-value')

const bgColorPicker = document.querySelector('#bg-color')
const bgColorValue = document.querySelector("#color-bg-value")

const updateColor = e => {
    const value = e.target.value;
    mainColorValue.innerText = value;
}

const updateBgColor = e => {
    const value = e.target.value;
    bgColorValue.innerText = value;
}

const addColorPickerEventListeners = () => {
    mainColorPicker.addEventListener('change', updateColor)
    bgColorPicker.addEventListener('change', updateBgColor);
}

addColorPickerEventListeners();

//sliders
const sizeSlider = document.querySelector('#size');
const marginValue = document.querySelector('#size-value');