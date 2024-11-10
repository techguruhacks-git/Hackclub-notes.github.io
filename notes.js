const NotesContent = document.querySelector(".notes-contain");
const Btn = document.querySelector(".btn");
let note = document.querySelectorAll(".input-Box");

function Showcontent(){
    NotesContent.innerHTML = localStorage.getItem("note");
}
Showcontent();
function savedata (){
    localStorage.setItem("note", NotesContent.innerHTML);
}


Btn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-Box";
    inputBox.setAttribute("contenteditable", true);
    img.src = "remove.jpeg";
    NotesContent.appendChild(inputBox).appendChild(img);
})


NotesContent.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()

    }
    
    else if(e.target.tagName === "P"){
        note = document.querySelectorAll(".input-Box");
        note.forEach(nt => {
            nt.onkeyup = function(){
                savedata();
            }
        })

    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})