let test = () => {
    document.getElementById("slot3").innerHTML="<img src='Images/MaxPommes.png' />";
    let ele = document.getElementById('slot3');
    ele.innerHTML += 'Max Pommes';
    document.getElementById("form3").style.left = '-700px';
}
function hidecount1(){
    document.getElementById('count1').style.visibility = "visible ";
    var pris =  document.getElementById('pay');
    var number2 = pris.innerHTML;
    number2 = Number(number2) + 25;
    pris.innerHTML = number2;
}
function hidecount2(){
    document.getElementById('count2').style.visibility = "visible";
    var pris =  document.getElementById('pay');
    var number2 = pris.innerHTML;
    number2 = Number(number2) + 20;
    pris.innerHTML = number2;
}
function hidecount3(){
    document.getElementById('count3').style.visibility = "visible";
    document.getElementById('pay').style.visibility = "visible";
    var pris =  document.getElementById('pay');
    var number2 = pris.innerHTML;
    number2 = Number(number2) + 60;
    pris.innerHTML = number2;
}

function addPrice() {
  var pris = parseInt(document.getElementById('pay').value, 10);
  pris = Number(pris) + 20;
  document.getElementById('pay').value = pris;
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

  function up() {
    var computerScore = document.getElementById('computerScore');
    var number = computerScore.innerHTML;
    number++;
    computerScore.innerHTML = number;
    var pris =  document.getElementById('pay');
    var number2 = pris.innerHTML;
    number2 = Number(number2) + 25;
    pris.innerHTML = number2;

}
function down() {
    var computerScore = document.getElementById('computerScore');
    var number = computerScore.innerHTML;
    number--;
    computerScore.innerHTML = number;
    var pris =  document.getElementById('pay');
    var number2 = pris.innerHTML;
    number2 = Number(number2) - 25;
    pris.innerHTML = number2;
}
function up2() {
    var computerScore2 = document.getElementById('computerScore2');
    var number = computerScore2.innerHTML;
    number++;
    computerScore2.innerHTML = number;
    var pris =  document.getElementById('pay');
    var number2 = pris.innerHTML;
    number2 = Number(number2) + 60;
    pris.innerHTML = number2;
}
function down2() {
    var computerScore2 = document.getElementById('computerScore2');
    var number = computerScore2.innerHTML;
    number--;
    computerScore2.innerHTML = number;
    var pris =  document.getElementById('pay');
    var number2 = pris.innerHTML;
    number2 = Number(number2) - 60;
    pris.innerHTML = number2;
}
function up3() {
    var computerScore3 = document.getElementById('computerScore3');
    var number = computerScore3.innerHTML;
    number++;
    computerScore3.innerHTML = number;
    var pris =  document.getElementById('pay');
    var number2 = pris.innerHTML;
    number2 = Number(number2) + 20;
    pris.innerHTML = number2;
}
function down3() {
    var computerScore3 = document.getElementById('computerScore3');
    var number = computerScore3.innerHTML;
    number--;
    computerScore3.innerHTML = number;
    var pris =  document.getElementById('pay');
    var number2 = pris.innerHTML;
    number2 = Number(number2) - 20;
    pris.innerHTML = number2;
}

function saveadress() {
  if(event.key === 'Enter') {
    var input = document.getElementById("Adress").value;
    sessionStorage.setItem("toadress", input);
    alert("Leveransadress: " + input);
  }
}
function saveorder() {
  var pageContent = document.getElementById("box").innerHTML; 
  sessionStorage.setItem("page1content", pageContent);
  }


