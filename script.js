function goPage(page){
    window.location.href = page;
}

// AUTO SCROLL CARDS
let scrollContainer = document.getElementById("cards");

setInterval(()=>{
    if(scrollContainer){
        scrollContainer.scrollLeft += 250;
        if(scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth){
            scrollContainer.scrollLeft = 0;
        }
    }
},2000);