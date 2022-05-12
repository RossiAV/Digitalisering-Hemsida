let test = () => {
    document.getElementById("box").innerHTML="<img src='Images/MaxPommes.png' />";
    let ele = document.getElementById('box');
    ele.innerHTML += 'Max Pommes';
}

document.getElementById("MaxHamburgare").onclick = function () {
    var div = document.createElement('div');
       div.style.backgroundColor = "black";
       div.style.position = "absolute";
       div.style.left = "575px";
       div.style.bottom = "325px";
       div.style.height = "10px";
       div.style.width = "10px";

       document.getElementsByTagName('body')[0].appendChild(div);
};
/*
function test(){
    document.getElementById("box").innerHTML="<img src='Images/MaxPommes.png' />";
    document.getElementById("box").textContent= 'Max pommes' ;
}
*/



/*function test() {
    var item = document.getElementById("donk");
     var list = document.getElementById("box");
    var clonedItem = item.cloneNode(true);
    list.appendChild(clonedItem);
}
for(var i = 0; i < 5; i++) {
    cloneItem();
  }*/