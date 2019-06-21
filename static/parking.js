// alert("okay")
document.querySelector("#btn").addEventListener("click",generateLot);

var available=[];

document.querySelector("table").addEventListener("click", delItem);

function generateLot()
{
   n=parseInt(document.querySelector("#n").value);
   m=parseInt(document.querySelector("#m").value);
   
   if (m>n)
      {
         alert("Number of cars must be lesser than total spaces");
         return
      }

    if (n>1000)
    {
    	alert("Please enter a smaller number");
        return;
    }
   
   document.querySelector("#form-div").style.display="none";
   document.querySelector("#table-div").style.display="block";

   
   for(i=1; i<=n; i++)
   {
   		available.push(i);
   }
   // console.log(available);
   
   for(j=0; j<m; j++)
   {
   	car=createCar();
   	addCar(car);
   }

}

function createCar()
{
	// color
	var color;

	var code=Math.ceil((Math.random() * 4));
	if (code==1){color="black";}
	else if(code==2){color="white";}
	else if(code==3){color="blue";}
	else if(code==4){color="red";}

	// console.log(color);

	// reg
	var reg;
	var num="";
	var alpha;

	for(i=0;i<6;i++)
	{
		var temp=Math.floor((Math.random()*10));

		// console.log(temp);
		temp.toString();
		num+=temp;	
	}

	// console.log(num);

	alpha=generate_random_string(4);
	// console.log(alpha);

	reg=`${alpha[0]}${alpha[1]} - ${num[0]}${num[1]} - ${alpha[2]}${alpha[3]} - ${num[2]}${num[3]}${num[4]}${num[5]}`


	// console.log(reg);

	var slotIndex=Math.floor((Math.random()*available.length));
	// console.log(slotIndex);

	if(available.length==0)
	{
		alert("Parking lot is full");
		return;	
	}

	var slot=available.splice(slotIndex,1);
	

	car=[reg, color,slot[0]];
	console.log(car);

	return car;

}

function generate_random_string(string_length)
{
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii);
    }
    return random_string.toUpperCase();
}


function addCar(car)
{
	var row = document.createElement("tr");

  	var col1 = document.createElement("td");
  	var col2 = document.createElement("td");
  	var col3 = document.createElement("td");
  	var col4 = document.createElement("td");

  	var text1=document.createTextNode(car[0]);
	var text2=document.createTextNode(car[1]);
	var text3=document.createTextNode(car[2]);
	var btn = document.createElement("button");

	var text=document.createTextNode("Remove");
	btn.appendChild(text)


	btn.setAttribute("class","btn btn-danger");

	col1.appendChild(text1);
  	col2.appendChild(text2);
  	col3.appendChild(text3);
  	col4.appendChild(btn);


  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);

document.querySelector("#table-body").appendChild(row);
  	

}

function delItem(e)
{
	if (e.target.getAttribute("class")=="btn btn-danger")
	  {

		   // alert(e.target.innerHTML+ " Are you sure ");
		 
		 	console.log(e.target.parentNode.parentNode.parentNode.children);  
		
		   e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);

		   var empty=parseInt(e.target.parentNode.parentNode.children[2].innerText);
		   available.push(empty);
		   available.sort();
		   alert(`Slot ${empty} is now vacant`);


		   console.log(e.target.parentNode.parentNode.children[2]);
		   console.log(available);


	  }


}

document.querySelector("#add-btn").addEventListener("click",addNew);

function addNew()
{
	k1=document.querySelector("#k1").value;
	k2=document.querySelector("#k2").value;
	k3=document.querySelector("#k3").value;
	k4=document.querySelector("#k4").value;

	var reg=`${k1.toUpperCase()} - ${k2} - ${k3.toUpperCase()} - ${k4}`;
	console.log(reg);

	var color=document.querySelector("#color").value;
	console.log(color);

	if(available.length==0)
	{
		alert("Parking lot is full");
		return;	
	}

	var slot=available[0];

	available.splice(0,1);

	car=[reg, color,slot];
	console.log(car);
	addCar(car);
	alert(`Car slot number is ${car[2]}`);


}







