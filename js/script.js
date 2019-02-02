let panel_bodies=document.getElementsByClassName("panel-body");

for(let i=0;i<panel_bodies.length;i++){
    panel_bodies[i].style.display="none";
}

function openAccordian(index){
    if(panel_bodies[index].style.display=="block")
        panel_bodies[index].style.display="none";
    else
        panel_bodies[index].style.display="block";
}