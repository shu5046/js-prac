//Select Elements
let pickColor = document.querySelector("#pick-color");
let error = document.querySelector("#error");
let fileInput = document.querySelector("#file");
let image = document.querySelector("#image");
let hexValRef = document.querySelector("#hex-val-ref");
let rgbValRef = document.querySelector("#rgb-val-ref");
let customAlert = document.querySelector("#custom-alert");
let pickedColorRef = document.querySelector("#picked-color-ref");
let eyeDropper;

window.onload = () => {
  if ("EyeDropper" in window) {
    pickColor.classList.remove("hide");
    eyeDropper = new EyeDropper();
  } else {
    error.classList.remove("hide");
    error.innerText = "Browser does not support Eyedropper API";
    pickColor.classList.add("hide");
    return false;
  }
};

const colorSelector = async () => {
  const color = await eyeDropper
    .open()
    .then((colorValue) => {
        console.log(colorValue);
      error.classList.add("hide");
      let hexValue = colorValue.sRGBHex;
      let rgbArr = [];
      for (let i = 1; i < hexValue.length; i += 2) {
        rgbArr.push(parseInt(hexValue[i] + hexValue[i + 1], 16));
        console.log(rgbArr);
      }
      let rgbValue = `rgb(${rgbArr})`;
    //   console.log(hexValue, rgbValue);
    console.log(result);
      result.style.display = "grid";
      hexValRef.value = hexValue;
      rgbValRef.value = rgbValue;
      pickedColorRef.style.backgroundColor = hexValue;
    })
    .catch((err) => {
      error.classList.remove("hide");
    });
};

pickColor.addEventListener("click", colorSelector);
fileInput.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);
  reader.onload = () => {
    image.src = reader.result;
  };
};
let copy = (textId) => {
    let text = document.getElementById(textId).value;

    
    navigator.clipboard.writeText(text).then(() => {
     
      customAlert.style.transform = "scale(1)";
      setTimeout(() => {
        customAlert.style.transform = "scale(0)";
      }, 1500);
    }).catch((err) => {
      console.error("Copy failed: ", err);
    });
};
