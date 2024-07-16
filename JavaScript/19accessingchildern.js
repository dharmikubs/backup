console.log(document.body.firstchild); //access first child of body
console.log(document.body.lastChild); //access last child of body
console.log(document.body.childNodes); //access all child nodes of body
console.log(document.body.childNodes[1]); //access specific child node of body
console.log(document.body.childNodes[body.childNodes.length - 1]); //is equal to last child
console.log(document.body.hasChildNodes()); //it checks the weather child node is exist or not

//note : if we want to get first element we can use something like this to prevent blank space and text node 
console.log(document.body.firstElementChild); //access first child of body
//child nodes are looks like array but its not an array
