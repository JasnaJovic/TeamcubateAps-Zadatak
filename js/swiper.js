window.addEventListener("load", init);
window.addEventListener("resize", init);


function init() {
  const img = document.querySelector("#arrows");
  const productDiv = document.querySelector("#product--info");
  const footerDiv = document.querySelector("#footer-container");
  const {width} = img.getBoundingClientRect();
  const halfImgWidth = width / 2;
  const prevButton = document.querySelector("#prev__button");
  const nextButton = document.querySelector("#next__button");
  
  nextButton.style.top = "50%";
  nextButton.style.left = "calc(100% - 90px)";
  prevButton.style.top = "50%";
  prevButton.style.left = "40px";
  img.addEventListener("mousemove", function(e) {
    const xPos = e.pageX - img.offsetLeft;
    const yPos = e.pageY - img.offsetTop;
    const border_rightPos = width - 65;
    console.log(yPos)
    if (xPos > halfImgWidth && xPos < border_rightPos ) {
      prevButton.style.top = "50%";
      prevButton.style.left = "40px";
      var horizontalPos = e.clientX-25;
      var verticalPos = e.clientY;
      nextButton.style.left = horizontalPos + 'px';
      nextButton.style.top = verticalPos + 'px';
    } else if (xPos > border_rightPos && xPos < width ){
      var verticalPos = e.clientY;
      nextButton.style.top = verticalPos + 'px';
      nextButton.style.left = "calc(100% - 90px)";
    } else if (xPos < 65){
      prevButton.style.left = "40px";
      var verticalPosPrev = e.clientY;
      prevButton.style.top = verticalPosPrev + 'px';
    } else if (xPos > 65 && xPos < halfImgWidth) {
      nextButton.style.top = "50%";
      nextButton.style.left = "calc(100% - 90px)";
      var horizontalPosPrev = e.clientX-25;
      var verticalPosPrev = e.clientY;
      prevButton.style.left = horizontalPosPrev + 'px';
      prevButton.style.top = verticalPosPrev + 'px';
    };

    if(yPos == 0){
      nextButton.style.top = "50%";
      nextButton.style.left = "calc(100% - 90px)";
      prevButton.style.top = "50%";
      prevButton.style.left = "40px";
    }
  });

productDiv.addEventListener("mousemove", defaultPositions);
footerDiv.addEventListener("mousemove", defaultPositions);
}

function defaultPositions(){
  const prevButton = document.querySelector("#prev__button");
  const nextButton = document.querySelector("#next__button");
  nextButton.style.top = "50%";
  nextButton.style.left = "calc(100% - 90px)";
  prevButton.style.top = "50%";
  prevButton.style.left = "40px";
}