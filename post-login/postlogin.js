var element = document . getElementById ( "btn1" ) ;
element.addEventListener
(
    "click",
    function ()
    {
        this . style . width = "15em" ;
    }
) ;
var element = document . getElementById ( "btn2" ) ;
element.addEventListener
(
    "click",
    function ()
    {
        this . style . width = "15em" ;
        this . style . color = "white";
    }
) ;
var element = document . getElementById ( "btn3" ) ;
element.addEventListener
(
    "click",
    function ()
    {
        this . style . width = "15em" ;
    }
) ;
  function myFunction1() {
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");
      btn1.style.backgroundColor="#2d9cc2";
      btn2.style.backgroundColor="white";
      btn3.style.backgroundColor="white";
      btn1.style.color="white";
      btn2.style.color="black";
      btn3.style.color="black";
      btn1.style.width="8em";
      btn2.style.width="4em";
      btn3.style.width="4em";
      btn1.innerHTML = "BEC";
      btn2.innerHTML = "<img src=\'icon1.png\' width=\'16em\' height=\'25em\'>";
      btn3.innerHTML = "<img src=\'icon1.png\' width=\'16em\' height=\'25em\'>";
     
}
function myFunction2() {
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");
      btn2.style.color="white";
      btn1.style.color="black";
      btn3.style.color="black";
      btn2.style.backgroundColor="#2d9cc2";
      btn2.style.width="8em";
      btn1.style.width="4em";
      btn3.style.width="4em";
      btn1.style.backgroundColor="white";
      btn3.style.backgroundColor="white";
      btn2.innerHTML = "EEEE";
      btn1.innerHTML = "<img src=\'icon1.png\' width=\'16em\' height=\'25em\'>";
      btn3.innerHTML = "<img src=\'icon1.png\' width=\'16em\' height=\'25em\'>";
}
function myFunction3() {
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");
      btn3.style.color="white";
      btn2.style.color="black";
      btn1.style.color="black";
      btn3.style.backgroundColor="#2d9cc2";
      btn1.style.backgroundColor="white";
      btn2.style.backgroundColor="white";
      btn3.style.width="8em";
      btn2.style.width="4em";
      btn1.style.width="4em";
      btn3.innerHTML = "ECAD";
      btn1.innerHTML = "<img src=\'icon1.png\' width=\'16em\' height=\'25em\'>";
      btn2.innerHTML = "<img src=\'icon1.png\' width=\'16em\' height=\'25em\'>";
}