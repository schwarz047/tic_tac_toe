// 1. Get all the cells
let cells = document.querySelectorAll(".cell");

let turnX = true;
let turnY = false;

let grid = document.querySelector(".box");
let res_window = document.querySelector(".reset");

let res_button = document.querySelector(".res_button");

let board = [ [1,2,3], [4,5,6], [7,8,9] , [1,5,9] , [7,5,3] , [1,4,7] , 
        [2,5,8], [3,6,9]];

res_button.addEventListener("click", restart);

function restart() {
    for(let i of cells) {
        i.innerText = "";
        i.disabled = false;
        i.classList.remove("winner");
    }
    res_window.style.visibility = "hidden";
    grid.style.visibility =  "visible";
    res_window.classList.remove("prompt");
}

function freeze() {
    for(let i of cells) {
        i.disabled = true;
    }
   
}

function prompt(){
     grid.style.visibility = "hidden";
    res_window.style.visibility = "visible";
    res_window.classList.add("prompt");
}
function getWinner() {
    for (let i of board) {
        let a = cells[i[0] - 1];
        let b = cells[i[1] - 1];
        let c = cells[i[2] - 1];

        
        if (a.innerText !== "" && a.innerText === b.innerText && a.innerText === c.innerText) {
            console.log(a.innerText + " wins!");

            
            a.classList.add("winner");
            b.classList.add("winner");
            c.classList.add("winner");
            freeze();
            setTimeout(prompt , 4000);

           
            return;    
        }
    }
}
        for (let item of cells) {
    
   
    item.addEventListener("click", () => {
        
        if(turnX) {
            item.innerText = "X";
            turnX = false;
            turnY = true;
            
        } else {
             item.innerText = "O";
            turnX = true;
            turnY = false;
            
        }
        item.disabled = true;
        getWinner();
    });
}


