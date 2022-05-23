

var outout = sessionStorage.getItem('toadress');

document.getElementById("minadress").innerHTML += outout;

document.getElementById("menycopy").innerHTML += sessionStorage.getItem("page1content");


function OrderDone(){
    document.getElementById("omw").style.visibility = "hidden";
    document.getElementById("done").style.visibility = "visible";
}


setTimeout( function() { OrderDone(); }, 60000);
  