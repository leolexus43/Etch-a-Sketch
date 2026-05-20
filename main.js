const boxContainer = document.getElementById("Main")
const colorChanger = document.querySelector("input")



const Generatebtn = document.body.querySelector("#Head").querySelector(".generateBtn")
const SelectBtn = document.body.querySelector("#Head").querySelector(".selectBtn")

let val = 0; // Global prompt value

boxContainer.addEventListener("dragover", (e) => {
   if (e.target.classList.contains("Box")) {
     e.target.style.backgroundColor = colorChanger.value;
   }
})


SelectBtn.addEventListener("click", ()=> {

  val = Number(window.prompt("Type any number between 16 and 20", "18"));

     Generatebtn.toggleAttribute("disabled")
    const divEl = document.getElementsByTagName("div")[2]
    const divParent = divEl.parentNode;
            divParent.removeChild(divEl);
})


Generatebtn.addEventListener("click", ()=> {

function makeContainer() {
        const Container = document.createElement("div")

        Container.setAttribute("id", "Container")
        Container.getAttribute("id")
        Container.style.backgroundColor = "white"

    boxContainer.appendChild(Container)

    return Container
}

const newContainer = makeContainer()

    if (val > 15 && val < 21) {
    for (i = val*val; i > 0; i--) {
    
    
    const newBox = document.createElement("div")

        newBox.style.border = "solid, 1px, Black"
        newBox.setAttribute("class", "Box")
        newBox.getAttribute("class")

    newContainer.appendChild(newBox)
    
    }
            } Generatebtn.disabled = true; 

})