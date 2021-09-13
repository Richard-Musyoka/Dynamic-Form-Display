const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
//get the data
let mealdata = JSON.parse(data);

//length of the meal data array
var mealArraySize = mealdata.length;
var currentRow = 1;
var currentRowItem = 1;
var maxItemsPerRow = 3;

//loop for each meal item
for(var currentMealIndex=0;currentMealIndex<mealArraySize;currentMealIndex++){

    //get meal name and description
    var mealName = mealdata[currentMealIndex].name;
    var description = mealdata[currentMealIndex].description;
    var mealImage = mealdata[currentMealIndex].image;

    if(currentRowItem > maxItemsPerRow){
        currentRow++;
        var containerRow = "<div class='container-row' id='items-"+currentRow+"'>"
        +"</div>";
        var recipeContainer = document.getElementById("recipe-container");
        recipeContainer.innerHTML += containerRow;
        currentRowItem = 1;

        var card = "<div class='default-card card-light'>"
        +"<div class='card-body'>"
        +"<div class='card-food-item'><img src='img/meals/"+mealImage+"'/></div>"
        +"<div class='card-food-description'>"
        +"<h2>"+mealName+"</h2>"
        +"<p>"+description+"</p>"
        +"</div>"
        +"<button class='button btn-blue' onclick='showRecipe("+currentMealIndex+")'>Read More</button>"
        +"</div>"
        +"</div>";
        responsive:responsive
        var items = document.getElementById("items-"+currentRow);
        items.innerHTML += card;
        currentRowItem++;
    }else{
         //add the name and desription to the ui
        var card2 = "<div class='default-card card-light'>"
        +"<div class='card-body'>"
        +"<div class='card-food-item'><img src='img/meals/"+mealImage+"'/></div>"
        +"<div class='card-food-description'>"
        +"<h2>"+mealName+"</h2>"
        +"<p>"+description+"</p>"
        +"</div>"
        +"<button class='button btn-blue' onclick='showRecipe("+currentMealIndex+")'>Read More</button>"
        +"</div>"
        +"</div>";
        responsive:responsive
        var items2 = document.getElementById("items-"+currentRow);
        items2.innerHTML += card2;
        currentRowItem++;
    }
   
  

  
}

function showRecipe(index){
  
    var selectedMealTitle = mealdata[index].name;
    var selectedMealDescription = mealdata[index].description;
    var selectedMealImage = mealdata[index].image;
    var selectedMealIngredients = mealdata[index].ingredients;
    var selectedMealSteps = mealdata[index].steps;

        //initialize ingredients array
    var ingredientsArraySize = selectedMealIngredients.length;

    //initialize steps array
    var stepsArraySize = selectedMealSteps.length;

    //render the ui
    document.getElementById("txtMealTitle").innerHTML = selectedMealTitle;
    document.getElementById("txtMealDescription").innerHTML = selectedMealDescription;
    document.getElementById("mealImage").src = "img/meals/"+selectedMealImage;

    var ingredientList = "";

    for(var i=0;i<ingredientsArraySize;i++){
        //add each ingredient to the list of ingredients UI
        //get the ul and append li to the list
        ingredientList += ""+selectedMealIngredients[i]+"";
    }
    document.getElementById("ingredientsList").innerHTML = ingredientList;

    var stepsList = "";

    for(var s=0;s<stepsArraySize;s++){
        //add each step to the list of steps ui
        //get the ol and append li to the list
        stepsList += ""+selectedMealSteps[s]+"";

    }
    document.getElementById("stepsList").innerHTML = stepsList;

    showModal();
}
//create a function that will be called when the user either hovers or clicks the button
function showModal(){
	var modalHolder = document.getElementById("modal-holder");
	modalHolder.style.display = "block";

	//closes the modal when the user clicks anywhere outside the modal dialog
	window.onclick = function(e){
		if (e.target == modalHolder) {
			modalHolder.style.display = "none";
		}
	}
	//closes the modal when the user clicks the "X" button
	document.getElementById('close-btn').addEventListener("click", (event)=>{
		modalHolder.style.display = "none";
	});
}
