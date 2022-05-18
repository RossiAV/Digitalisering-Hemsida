let test = () => {
    document.getElementById("slot3").innerHTML="<img src='Images/MaxPommes.png' />";
    let ele = document.getElementById('slot3');
    ele.innerHTML += 'Max Pommes';
    document.getElementById("form3").style.left = '-700px';


}


function test1(){
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number1').value = value;

}

function test2(){
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;

}

function test3(){
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number3').value = value;

}

function hidetest() {
    var x = document.getElementById("meny1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
function hidetest2() {
    var x = document.getElementById("meny2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    
function hidetest3() {
    var x = document.getElementById("meny3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
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