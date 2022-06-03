var productNameInput= document.getElementById('productNameInput');
var productpriceInput= document.getElementById('productpriceInput');
var productcategoryinput= document.getElementById('productcategoryinput');
var productDescriptionInput= document.getElementById('productDescriptionInput');
var productcountInput = document.getElementById('productcountInput');

var addBtn= document.getElementById('addBtn');
var updateBtn= document.getElementById('updateBtn');

var mood= 0

var tableBody = document.getElementById('tableBody');

var productcontiner;

if( localStorage.getItem("myproducts") != null)
{
productcontiner =JSON.parse (localStorage.getItem("myproducts"))
displayProducts(productcontiner);

}
else
{
    productcontiner=[];
}


function addproduct()
{
if(validateproductName()==true  && validateproductprice()==true)

{
  var product =
 {
name:productNameInput.value,
price:productpriceInput.value,
count:productcountInput.value,
category:productcategoryinput.value,
desc:productDescriptionInput.value,

}

productcontiner.push(product)
localStorage.setItem("myproducts",JSON.stringify(productcontiner))
clearForm();
displayProducts(productcontiner);
  
}

}





function clearForm()
{

productNameInput.value=""
productpriceInput.value=""
productcategoryinput.value=""
productDescriptionInput.value=""
count:productcountInput.value=""

}







function displayProducts(productlist)

{
    
    var cartoona =``;
for(i = 0; i < productlist.length; i++){

cartoona += `  <tr>

<td>${i}</td>
<td> ${productlist[i].name} </td>
<td>${productlist[i].price}</td>
<td>${productlist[i].count}</td>

<td>${productlist[i].category}</td>
<td>${productlist[i].desc}</td>



<td><button  onclick="increaseCount(${i})"  class="btn btn-info "> <i class="fa-solid fa-circle-plus"></i></button></td>
<td><button onclick="decreaseIncrease(${i})"  class="btn btn-info ">  <i class="fa-solid fa-circle-minus"></i>  </button></td>

<td><button onclick="updateproduct(${i})"  class="btn btn-warning ">update</button></td>
<td><button onclick="deleteproduct(${i})" class="btn btn-danger ">delete</button></td>

</tr>
`

}
tableBody.innerHTML = cartoona;
}


function searchproducts(searchTerm)
{
    var searchresult=[];
    for(i=0;i<productcontiner.length;i++ )
    {
    if(productcontiner[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true)
    {
        searchresult.push(productcontiner[i]);
    }
}
displayProducts(searchresult);
}


function deleteproduct(delet){

    productcontiner.splice(delet,1)
    localStorage.setItem("myproducts",JSON.stringify(productcontiner))

    displayProducts(productcontiner);


}

function updateproduct(updatedindex)
{
    productNameInput.value=productcontiner[updatedindex].name
    productpriceInput.value=productcontiner[updatedindex].price
    productcategoryinput.value=productcontiner[updatedindex].category
     productDescriptionInput.value=productcontiner[updatedindex].desc
     addBtn.innerHTML = "upDate"



}


function edit()
{
    productcontiner[mood].name= productNameInput.value
    productcontiner[mood].price=   productpriceInput.value
    productcontiner[mood].category=  productcategoryinput.value
    productcontiner[mood].desc=  productDescriptionInput.value

    localStorage.setItem("myproducts",JSON.stringify(productcontiner))
    displayProducts(productcontiner)


 
}

function add(){

    if(addBtn.innerHTML =="upDate"){
        edit()
        clearForm()
    }
    else{
        
        addproduct()

    }
}

function increaseCount(index){
   productcontiner[index].count++; 
   localStorage.setItem("myproducts",JSON.stringify(productcontiner))
   displayProducts(productcontiner);
}

function decreaseIncrease(index)
{
    productcontiner[index].count--; 
    localStorage.setItem("myproducts",JSON.stringify(productcontiner))
    displayProducts(productcontiner);
 }
 
 
let parg = document.getElementById("demo")

function validateproductName()
{
var ragex=/^[A-Z]{1}[a-z]{3,8}$/;
if(ragex.test(productNameInput.value)==true)
{

    productNameInput.classList.replace('is-invalid','is-valid');
    return true;
}

else  {
    productNameInput.classList.add('is-invalid');
    return false;
}


}



function validateproductprice()
{
        var x=/^[0-9]{3,5}$/
        if(x.test(productpriceInput.value)==true)
{
    productpriceInput.classList.replace('is-invalid','is-valid');
    return true;
}

else{
    productpriceInput.classList.add('is-invalid');
    return false;
}


}