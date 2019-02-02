let slider_images=document.getElementsByClassName("slider");
let index=0;
for(let i=1;i<slider_images.length;i++){
    slider_images[i].style.display="none";
}
function ShowPrevImage(){
    slider_images[index].style.display="none";
    if(index==0){
        index=slider_images.length;
    }
    slider_images[index-1].style.display="block";
    index--;
}
function ShowNextImage(){
    slider_images[index].style.display="none";
    if(index==slider_images.length-1)
        index=-1;
    slider_images[index+1].style.display="block";
    index++;
    
}

setInterval(ShowNextImage,2000);