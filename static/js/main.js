const currOrder = [];

document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    createDominos();

    
    const goodOrder = ["0","1","3","3","2"]


    const keys=document.querySelectorAll('.keyboard-container div button')

    for(let i = 0;i<keys.length; i++) {
        keys[i].onclick = ({target})=> {
            const key = target.getAttribute("data-key");
            if(key <5) {
                addDomino(key);
            }
            else if(key == "verify")
            {
                verifySet();
            }
            
            console.log(key);
        }
    }
    
    
    function removeDomino() {
        let dom = document.getElementById("placedDominoId"+(currOrder.length-1));
        currOrder.pop()
        console.log(currOrder.length);
        console.log(dom);
        dom.remove()
    }
    function addDomino(key) {
        if(currOrder.length <6) {
            const selDom = document.getElementById("iddom"+key);

            const selSquare = document.getElementById("idsq"+currOrder.length);
            let dom = document.createElement("button");
            dom.setAttribute("class","domino-square");
            dom.setAttribute("id","placedDominoId"+currOrder.length)
            dom.addEventListener('click', removeDomino);
            dom.innerHTML = selDom.innerHTML

            currOrder.push(key);
            console.log(selDom);

            selSquare.appendChild(dom);
        }
        else
        {
            console.log("Only 6 dominos are allowed")
        }

    }

    function displayWin() {
        const ele = document.getElementById("container");
        let newele = document.createElement("h3");
        newele.innerHTML ="YOU WIN";
        ele.appendChild(newele);
        ele.setAttribute("class","win");
        console.log("won game");
    }
    
    function verifySet() {
        console.log(currOrder);
        console.log(goodOrder);
        if(JSON.stringify(currOrder)==JSON.stringify(goodOrder)) {
            displayWin();
        }
    }


    function createSquares() {
        const gameBoard = document.getElementById("board")

        for (let index = 0; index < 6; index++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id","idsq"+index);
            gameBoard.appendChild(square);
        }
    }
    function createDominos() {
        const dominogrid = document.getElementById("dom-container")

        for(let i = 0; i < 5; i ++) {
            let setdomino = document.createElement("button");
            setdomino.setAttribute("id","iddom"+i);
            setdomino.setAttribute("data-key",i)

            setdomino.innerHTML = "hehe <br> dom"+i 

            dominogrid.appendChild(setdomino);
        }

    }
});