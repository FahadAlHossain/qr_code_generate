const imgBox = document.getElementById("imgBox");
const qrImg = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");
const error = document.getElementById("errorMsg");

const qrGenerate = () => {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    error.innerHTML = "";
  }else{ 
    qrText.classList.add("error");
    error.innerHTML = "Please insert Text or URL"
    setTimeout(()=>{
        qrText.classList.remove("error");
    },1000)
    imgBox.textContent = null;
    imgBox.classList.remove("show-img")
  }
};
