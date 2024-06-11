let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll("#reset");
let turnO = true; // true = player O , false = player X
let newbtn = document.querySelector("#new");
let msg = document.querySelector("#msg");

const winningPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>
    {
        if (turnO == true){
                    box.innerText="O";
                    turnO = false;
                }
                else{
                    box.innerText="X";
                    turnO = true;
                } 
                box.disabled = true;

                check();
            }
    );
})

const check = () =>{
    for(let pattern of winningPatterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
           if(p1 === p2 && p2 === p3)   {
            msg.innerText = "Winner Is Player " + p1 ;
            reset.innerText ="New Game";
            boxes[pattern[0]].setAttribute("style" , "font-size:15vmin;");
            boxes[pattern[1]].setAttribute("style" , "font-size:15vmin;");
            boxes[pattern[2]].setAttribute("style" , "font-size:15vmin;");
            disableboxes();
           }
        }
    }
}
const disableboxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
    }
}
const resetgame = ()=>{
    turnO = true;
    enableboxes();
    for(let box of boxes){
        box.innerText = "";
        box.setAttribute("style" , "font-size:8vmin;");
    }
    msg.innerText = ""
}
