// alert("connected");
document.querySelector("#add_btn").addEventListener("click",addItem);

document.querySelector("table").addEventListener("click",delItem);




function addItem()
{
	// alert("works");
	item=document.querySelector("#to_add");

	alert(item.value);
	var table_body=document.querySelector("tbody");

	var cost=10;

	if(item.value=="Book 1"){cost=10;}
	if(item.value=="Book 2"){cost=15;}
	if(item.value=="Music CD"){cost=20;}
	if(item.value=="Small Chocolate"){cost=5;}
	if(item.value=="Big Chocolate"){cost=12;}
	if(item.value=="Headache Pills"){cost=5;}
	if(item.value=="Cold Syrup"){cost=15;}
	if(item.value=="Mobile Phone"){cost=100;}
	if(item.value=="Laptop"){cost=450;}
	if(item.value=="Perfume"){cost=35;}


// Book 1 ($10)
// * Book 2 ($15)
// * Music CD ($20)
// * Small Chocolate ($5)
// * Big Chocolate ($12)
// * Headache Pills ($5)
// * Cold Syrup ($15)
// * Mobile Phone ($100)
// * Laptop ($450)
// * Perfume ($35)

var rows=document.querySelectorAll('tr')
// console.log(rows);

console.log(item.value);

var flag=0;
for (var i = 1; i < rows.length; i++) 
{
    // console.log(i); // index
    // console.log(rows[i]); // value
        console.log(rows[i].children[0].textContent);


    if (rows[i].children[0].textContent==item.value)
    {
    	flag=1;
    	console.log(flag);

    	var qtty=parseInt(rows[i].children[1].textContent) + 1;
    	var total=parseInt(rows[i].children[3].textContent)*qtty;
    	var tt= total*150 / 100;

    	rows[i].children[1].textContent= qtty;
    	rows[i].children[3].textContent= total;
    	rows[i].children[4].textContent= tt;

    }


}







if (flag==0)
{



	var row = document.createElement("tr");

  	var col1 = document.createElement("td");
  	var col2 = document.createElement("td");
  	var col3 = document.createElement("td");
  	var col4 = document.createElement("td");
  	var col5 = document.createElement("td");
  	var col6 = document.createElement("td");

  
  

  var text1=document.createTextNode(item.value);
  var text2=document.createTextNode("1");
  var text3=document.createTextNode(cost);
  var text4=document.createTextNode(cost);
  var text5=document.createTextNode(parseInt(cost)*110/100);
  var text6=document.createTextNode("[X]");
  

  col1.appendChild(text1);
  col2.appendChild(text2);
  col3.appendChild(text3);
  col4.appendChild(text4);
  col5.appendChild(text5);
  col6.appendChild(text6);

  col6.setAttribute("class","last"); 
  
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);
  row.appendChild(col6);

  table_body.appendChild(row);
  
  // div_node.setAttribute("id","work");
  // span_del.setAttribute("class","to-right");

  console.log(table_body);

}


findSum();

}


function findSum()
{
	var rows=document.querySelectorAll('tr');
	// console.log(rows);

	var sum=0;
	for (var i = 1; i < rows.length; i++) 
	{
        console.log(rows[i].children[4].textContent);

        sum+=parseFloat(rows[i].children[4].textContent);
    }

    console.log(sum);
    document.querySelector("#sum_val").textContent=sum;

}




function delItem(e)
{
	if (e.target.getAttribute("class")=="last")
	  {

		   alert(e.target.innerHTML+ " Are you sure ");
		   console.log(e.target.parentNode.parentNode);
		 	console.log(e.target.parentNode.parentNode.children);  
		   var tab=document.querySelector("#tab");
		   e.target.parentNode.parentNode.removeChild(e.target.parentNode);
	  }

	  findSum();

}