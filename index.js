//load the image first and change bg-image to loaded image
function loadImage(url,callback){
  const img = new Image();
  img.onload = function(){
    callback(img?.src);
  }
  img.src = url;
}
const bgDiv = document.getElementById("bg-image");
function changeBackgroundImage(){
    const index = Math.floor(Math.random()*7);
    loadImage(`./assests/images/uk-temple-${index}.jpg`,function(url){
      bgDiv.style.backgroundImage = `url(${url})`;
    });
}
let carousel = (window.innerWidth>=480) && setInterval(changeBackgroundImage,7000);
let isbgImgrunning = (window.innerWidth>=480);
window.addEventListener("resize",function(){
  if(this.window.innerWidth < 480){
    this.clearInterval(carousel);
    bgDiv.style.background = "none";
    console.log("if running");
  }
  else{
    bgDiv.style.backgroundImage = "url(./assests/images/uk-temple-1.jpg)"
    if(!isbgImgrunning){
      carousel = this.setInterval(changeBackgroundImage,7000);
      isbgImgrunning = true
    }
  }
})

let username = ""
const errorSpan = document.querySelector("#emptyInputWarn");
errorSpan.style.visibility = "hidden";
const inputParent = document.querySelector("#login-username");

const inputDiv = document.querySelector(".textInput");
const borderClr = document.documentElement.style;
inputParent.addEventListener("focus",()=>{
  inputDiv.classList.add("mouseDown");
  inputParent.style.borderBottom = "1px solid var(--inputHoverBorderClr)"
});
inputParent.addEventListener("mouseenter",()=>{
  if(username){
    inputParent.style.borderBottom = "2px solid var(--inputHoverBorderClr)"
  }
})
inputParent.addEventListener("mouseleave",()=>{
  if(username){
    inputParent.style.borderBottom = "1px solid var(--inputHoverBorderClr)"
  }
})
inputParent.addEventListener("blur",()=>{
  if(!username){
    errorSpan.style.visibility = "visible";
    borderClr.setProperty("--inputHoverBorderClr","rgb(212, 3, 3)");
    borderClr.setProperty("--inputBorderNTextClr","rgb(212, 3, 3)");
  }
  else{
    borderClr.setProperty("--inputBorderNTextClr","#33189f");
    borderClr.setProperty("--inputHoverBorderClr","gray");
    errorSpan.style.visibility = "hidden";
  }
  inputDiv.classList.remove("mouseDown");
});
function handleChange(){
  username = inputParent.value;
}

function handleSubmit(event){
  event.preventDefault();
}