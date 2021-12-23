// const inputIdItem = "input"
// const btnId = "addBtn"
// const getInput = () => {

//     const inputValue = document.getElementById(inputIdName).value;


//     let node = document.createElement("li");

//     let textnode = document.createTextNode(inputValue);
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);

// }
// const clickBtn = document.getElementById(btnId).addEventListener("click", getInput)



const inputIdName = "input"
const btnId = "addBtn"




const getInput = () => {
    const inputValue = document.getElementById(inputIdName).value;


    let node = document.createElement("li");

    let textnode = document.createTextNode(inputValue);
    node.appendChild(textnode);

    document.getElementById("myList").appendChild(node);


}

const clickBtn = document.getElementById(btnId).addEventListener("click", getInput)