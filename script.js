//color
const qrColorPicker = document.querySelector('#color');
const qrColorValue = document.querySelector('#color-value')

const bgColorPicker = document.querySelector('#bg-color')
const bgColorValue = document.querySelector("#color-bg-value")

const updateColor = e => {
    const value = e.target.value;
    qrColorValue.innerText = value;
}

const updateBgColor = e => {
    const value = e.target.value;
    bgColorValue.innerText = value;
}

const addColorPickerEventListeners = () => {
    qrColorPicker.addEventListener('change', updateColor);
    bgColorPicker.addEventListener('change', updateBgColor);
};

addColorPickerEventListeners();

//sliders
const sizeSlider = document.querySelector('#size');
const sizeValue = document.querySelector('#size-value');

const marginSlider = document.querySelector('#margin')
const marginValue = document.querySelector('#margin-value')

const updateSize = e => {
    const value = e.target.value;
    sizeValue.innerText = `${value} x ${value}`;
};

const updateMargin = e => {
    const value = e.target.value;
    marginValue.innerText = `${value} px`;
};

const addSliderEventListeners = () => {
    sizeSlider.addEventListener('change', updateSize);
    marginSlider.addEventListener('change', updateMargin)
}

addSliderEventListeners();

const submitButton = document.querySelector('#submit');

const onSubmit = () => {
    console.log("clicked")
}

const addSubmitEventListener = () => {
    submitButton.addEventListener('click', onSubmit)
}

addSubmitEventListener();