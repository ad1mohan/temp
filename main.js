const autoRotateBtnElement = document.getElementById("autoRotateBtn");
const iFrameElement = document.getElementById("iFrame");
autoRotateBtnElement.addEventListener("click",autoRotateBtnClicked);
const iFrameElementDocument = iFrameElement.contentDocument;

function autoRotateBtnClicked(){    
    iFrameElementDocument.getElementById("modelViewer").removeAttribute('auto-rotate')
    console.log(iFrameElementDocument.getElementById("modelViewer"))
}