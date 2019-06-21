// set classes
function setClassesEasy()
{
   var colors=["red","red","blue","blue","green","green","orange","orange"];

   var all=document.querySelector(".easy");

   all.setAttribute("id", "all");

   all.style.display="block";

for(var i=0; i< all.children.length;i++)
   {
      // console.log("hello");
      var index=Math.floor(Math.random()*colors.length);
      
      var c=colors.splice(index,1);
      console.log(c);
      console.log(index);
      console.log(i);
      
      all.children[i].setAttribute("class",c[0]);
   } 

start();
}



function start()
{
   var all=document.getElementById("all");
   console.log(all);
   
   for(var i=0; i<all.children.length; i++)
      {
         all.children[i].addEventListener("click", open);
      }


   var colorNow="#eed";
   var flag=0;
   var idOld="x";

function open(e)
{
   
   if (flag==1)
      {
         compare(e);
      }
   
   else
      {
         flag=1;
         idOld=e.target.id;
         console.log(idOld);
         
         e.target.style.background=e.target.getAttribute("class");
              
                 
         window.setTimeout(close,1500);

         function close()
         {
            // alert(e.target.id)
            e.target.style.background=`#eed`;
            idOld="x";
            flag=0;
         }
      }
}


function compare(e)
{
      old=document.getElementById(idOld);
      console.log(old);
   
   console.log(e.target); 
   
   if(e.target.getAttribute("class")==old.getAttribute("class") )
      {
         console.log("In");
          // && e.target.id != idOld
         e.target.style.background=old.style.background;
         window.setTimeout(deleteBoth,500);
         function deleteBoth()
         {
            e.target.style.visibility="hidden";
            old.style.visibility="hidden";
            
            var all=document.getElementById("all");
            var completed=true;
            for(var i=0; i<all.children.length; i++)
               {
                  
                  if(all.children[i].style.visibility!="hidden")
                     {
                        completed=false;
                     }
               }
            
            if (completed==true)
               {
                  isPlaying=false;
               
                  alert(`Completed. Your time is ${time}`);
               }
            
         }
      }
   else
      {
         flag=0;
         open(e);
      }
   
}
}
var isPlaying=true;
var time=-1;
var t=document.getElementById("t");

// window.addEventListener("load",increaseTime);
// increaseTime();
function increaseTime()
{
   setInterval(increaseT,1000); 

   function increaseT()
      {
         if (isPlaying==true && time<200)
            {
               // alert("hell");
               time++;
               document.getElementById("t").innerText=time;

            }
      }
}




function setClassesMedium()
{
var colors=["red","red","blue","blue","green","green","orange","orange","pink","pink","grey","grey"];

var all=document.querySelector(".medium");

all.setAttribute("id", "all");
   
all.style.display="block";

for(var i=0; i< all.children.length;i++)
   {
      // console.log("hello");
      var index=Math.floor(Math.random()*colors.length);
      
      var c=colors.splice(index,1);
      // console.log(c);
      // console.log(index);
      // console.log(i);
      
      all.children[i].setAttribute("class",c[0]);
   } 

 console.log(all)
start();
}

function setClassesHard()
{
   console.log("okay");
var colors=["red","red","blue","blue","green","green","orange","orange","pink","pink","grey","grey","yellow","yellow","black", "black"];

var all=document.querySelector(".hard");

all.setAttribute("id", "all");
   
all.style.display="block";

for(var i=0; i< all.children.length;i++)
   {
      // console.log("hello");
      var index=Math.floor(Math.random()*colors.length);
      
      var c=colors.splice(index,1);
      // console.log(c);
      // console.log(index);
      // console.log(i);
      
      all.children[i].setAttribute("class",c[0]);
   } 

 console.log(all)
start();
}

document.querySelector("#btn-e").addEventListener("click", setClassesEasy);
document.querySelector("#btn-e").addEventListener("click", increaseTime);

document.querySelector("#btn-m").addEventListener("click", setClassesMedium);
document.querySelector("#btn-m").addEventListener("click", increaseTime);

document.querySelector("#btn-h").addEventListener("click", setClassesHard);
document.querySelector("#btn-h").addEventListener("click", increaseTime);