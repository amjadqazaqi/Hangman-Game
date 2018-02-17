var words = ["cow","dog","tiger"] ;
var hints=["milk","barking","love the meat"];
var gleft=5;
var dashes="";
var dashesarray;
var guesstimes=0;
var wrongguess="";
var currentword="";
var rguess=0;
var winn=0;
var losses=0;
function playsound()
{
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/Mousclik.wav");
    audioElement.play();
}

function startnewgame()
{

    var x = Math.floor((Math.random() * 3) );
  //  document.getElementById("myhint").textContent="Hint : "+ hints[x];
    currentword=words[x];
    todashes(currentword);
    //alert(currentword);
    rguess=0;
    dashesdisplay();
    alert("newgame");
    gleft=5;
    wrongguess="";
    document.getElementById("guesses-left").textContent=gleft;
    document.getElementById("wrong-guesses").textContent=wrongguess;
    dashes="";
    guesstimes=0;
    document.getElementById("myhint").textContent="Hint : "+ hints[x];
   // StartMyGame();
}


function todashes(text0)
{
    
   
   
    dashesarray = new Array(text0.length)
    for(var i=0;i<text0.length;i++)
    {
        
        dashesarray[i]="_"
    }

   
}
function dashesdisplay ()
{
    var dashdisplay1="";
    for(var i=0;i<dashesarray.length;i++)
    {
        dashdisplay1=dashdisplay1+dashesarray[i]+" ";
        
    }
 
 
 var dashtemplet=document.getElementById("word-blanks");
 dashtemplet.textContent=dashdisplay1;


}




function mygame(dd,mysrtring)
{
    

   // alert(dd)
   
  var mygameword =mysrtring;
  for (var i=0;i<mygameword.length;i++)
  {
      
      if( dd ==  mygameword[i])
      {
        return(i);
      }

  }
  



}

document.onkeyup = function(event) {
playsound();
if(mygame(event.key,currentword) != undefined )
{
   // alert(event.key+" "+ mygame(event.key,words[0]));

  dashesarray[mygame(event.key,currentword)] = event.key;
  rguess=rguess+1;
   dashesdisplay();
  // alert(rguess +"   "+currentword.length )
   if(rguess==currentword.length)
   {
       winn=winn+1;
 
       document.getElementById("win-counter").textContent=winn;
    //alert("you won");
    startnewgame();
   }
}
else{
    wrongguess=wrongguess+event.key+" , ";
    
    gleft--;
    guesstimes++;
    document.getElementById("guesses-left").textContent=gleft;
    document.getElementById("wrong-guesses").textContent=wrongguess;
    if(gleft==0)
    {
        losses=losses+1;
        document.getElementById("loss-counter").textContent=losses;
        alert("you lost");
        startnewgame();
    }
   // alert(gleft);
}


}
