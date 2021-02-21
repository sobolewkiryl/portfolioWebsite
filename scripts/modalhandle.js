const itemList = document.querySelectorAll('#search-button');

const xClose = document.querySelectorAll('.close');

const modalWindow = document.querySelectorAll('.pop-up');

const modalGlobal = document.querySelector('.modal-global');

function openWindow(e){

    const clickedButtonIndex = e.target.classList[2];

    modalGlobal.style.display = "block";

    modalWindow[clickedButtonIndex].style.display = "block";
}

itemList.forEach(function(listItem){

    listItem.addEventListener('click', openWindow)
})

function closeWindow(){
    for(i=0;i<modalWindow.length;i++){
        if(modalWindow[i].style.display === "block"){
            modalWindow[i].style.display = 'none';
        }
    }
    modalGlobal.style.display="none"; 
}

xClose.forEach(function(closeB){
    closeB.addEventListener('click', closeWindow)
})
