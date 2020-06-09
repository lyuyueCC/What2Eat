//select the <tbody> element
//you can make this more precise by using a descendant selector,
//referring to a particular <table> by ID or style class name
var tbody = document.getElementById('output');
var tbodySmall = document.getElementById('outputSmall');
var cuisineInput = document.getElementById('cuisine-select')
var difficultyInput = document.getElementById('difficulty-select')
var servingsInput = document.getElementById('servings-select')
var veganInput = document.getElementById('Vegan')
var healthyInput = document.getElementById('Healthy')
var moreEffortInput = document.getElementById('More effort')


function filterDishes(recipt_list){
    filtered = recipt_list.filter(function(p) {
        if(cuisineInput.value==""){
            return true;
        }
        return (p.cuisine==cuisineInput.value);
    }).filter(function(p) {
        if(difficultyInput.value==""){
            return true;
        }
        return (p.difficulty==difficultyInput.value.toLowerCase());
    }).filter(function(p) {
        if(servingsInput.value==""){
            return true;
        }
        if(servingsInput.value=="Less than 2"){
            return (p.serving<=2)
        }else if(servingsInput.value=="More than 2"){
            return (p.serving>2 && p.serving<=4)
        }else if(servingsInput.value=="More than 4"){
            return (p.serving>4 && p.serving<=6)
        }else if(servingsInput.value=="More than 6"){
            return (p.serving>6)
        }
    }).filter(function(p) {
        if(veganInput.checked){
            return p.vegan;
        }else{
            return true;
        }
    }).filter(function(p) {
        if(healthyInput.checked){
            return p.healthy;
        }else{
            return true;
        }
    }).filter(function(p) {
        if(moreEffortInput.checked){
            return p.moreeffort;
        }else{
            return true;
        }
    })

    filtered.forEach(function(p) {
        tbody.appendChild(renderDishes(p));
        tbodySmall.appendChild(renderDishesSmall(p));
    });

    return filtered;
}

function allRecipes(recipt_list){
    $(':input').val('');
    $('input[type=checkbox]').prop('checked',false);
    tbody.textContent = "";
    tbodySmall.textContent="";
    // console.log("cuisineInput:", cuisineInput.value);
    // console.log("difficultyInput:", difficultyInput.value);
    // console.log("servingsInput:", servingsInput.value);
    // console.log("veganInput:", veganInput.value);
    // console.log("healthyInput:", healthyInput.value);
    // console.log("moreEffortInput:", moreEffortInput.value);
    recipt_list.forEach(function(p) {
        tbody.appendChild(renderDishes(p));
        tbodySmall.appendChild(renderDishesSmall(p));
    });
}



function render(recipt_list) {
    cuisineInput.addEventListener("change", function() {
        tbody.textContent = "";
        tbodySmall.textContent="";
        console.log(filterDishes(recipt_list));
    });
    difficultyInput.addEventListener("change", function() {
        tbody.textContent = "";
        tbodySmall.textContent="";
        console.log(filterDishes(recipt_list));
    });

    servingsInput.addEventListener("change", function() {
        tbody.textContent = "";
        tbodySmall.textContent="";
        console.log(filterDishes(recipt_list));
    });

    veganInput.addEventListener("click", function() {
        tbody.textContent = "";
        tbodySmall.textContent="";
        console.log(filterDishes(recipt_list));
    });

    healthyInput.addEventListener("click", function() {
        tbody.textContent = "";
        tbodySmall.textContent="";
        console.log(filterDishes(recipt_list));
    });

    moreEffortInput.addEventListener("click", function() {
        tbody.textContent = "";
        tbodySmall.textContent="";
        console.log(filterDishes(recipt_list));
    });
}

function renderDishesSmall(dish){
     //create the <tr> element
     var tr = document.createElement("tr");
     var img = document.createElement("img");
     img.src= "./recipeImage/"+dish.name+".jpg";
     img.style="width:100px;"
 
     //create and append the <td> elements
     // tr.appendChild(renderDishProp(dish.name));
     tr.appendChild(img);
     tr.appendChild(renderDishPropSmall(dish.name,dish.discription,dish.receiptLink));
     //tr.appendChild(renderDishProp(dish.receiptLink));
 
     //return the table row to the caller
     return tr;

}

function renderDishes(dish){
    //create the <tr> element
    var tr = document.createElement("tr");
    var img = document.createElement("img");
    img.src= "./recipeImage/"+dish.name+".jpg";
    img.style="width:100px;"

    //create and append the <td> elements
    // tr.appendChild(renderDishProp(dish.name));
    tr.appendChild(img);
    tr.appendChild(renderDishProp(dish.name,dish.discription,dish.receiptLink));
    //tr.appendChild(renderDishProp(dish.receiptLink));

    //return the table row to the caller
    return tr;

}


function renderDishProp(nameContent,desContent,linkContent) {
    //create the new <td> element
    var td = document.createElement("td");
    var tdName = document.createElement("b");
    var tdDes = document.createElement("p");
    var tdLink = document.createElement("a");
    tdLink.appendChild(document.createTextNode("  ->Visit Recipe"));
    tdLink.href = linkContent;
    tdLink.target="_blank";
    //set its text content to the provided value
    tdName.textContent = nameContent;
    tdDes.textContent = desContent;
    tdName.appendChild(tdLink);
    td.appendChild(tdName);
    td.appendChild(tdDes);

    //return the new element to the caller
    return td;
}

function renderDishPropSmall(nameContent,desContent,linkContent) {
    //create the new <td> element
    var td = document.createElement("td");
    var tdName = document.createElement("b");
    var nextLine = document.createElement("br");
    var tdLink = document.createElement("a");
    tdLink.appendChild(document.createTextNode("Visit Recipe"));
    tdLink.href = linkContent;
    tdLink.target="_blank";
    //set its text content to the provided value
    tdName.textContent = nameContent;
    td.appendChild(tdName);
    td.appendChild(nextLine);
    td.appendChild(tdLink);

    //return the new element to the caller
    return td;
}