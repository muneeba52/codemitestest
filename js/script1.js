let tabs=document.getElementsByClassName("information");
let list_items=document.getElementsByTagName("li");
for(let i=1;i<tabs.length;i++){
    tabs[i].style.display="none";
}

function open_tab(index){
    tabs[index].style.display="block";
      
      for(let i=0;i<tabs.length;i++){
          if(index!=i)
              tabs[i].style.display="none";
      }  
    
    for(let i=0;i<list_items.length;i++){
        list_items[i].classList.remove("active");
    }
    event.target.classList.add("active");
}