var showbody = document.getElementById('body');

function getAll(recipt_list) {
    recipt_list.forEach(function(p) {
        showbody.appendChild(addNewCard(p))
    });
}

function addNewCard(r){
    var col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 d-flex"

    var showCard = document.createElement("div");
    showCard.className = "shadow card"

    var br = document.createElement("br");
    var img = document.createElement("img");
    img.style="width:80%; margin-left: auto; margin-right: auto;"
    img.src = "../recipeImage/"+r.name+".jpg"
    var cardBody = document.createElement("div");
    cardBody.className = "card-body "

    var name = document.createElement("h5");
    name.className = "card-title"
    name.appendChild(document.createTextNode(r.name)); 
    var servings = document.createElement("h6");
    servings.className = "card-subtitle mb-2 text-muted";
    servings.appendChild(document.createTextNode("Serves "+r.serving+" people, "+r.difficulty.toUpperCase()));
    var des = document.createElement("p");
    des.className = "card-text";
    des.appendChild(document.createTextNode(r.discription));
    var link = document.createElement("a");
    link.appendChild(document.createTextNode("View recipe")); 
    link.className = "btn-sm btn btn-primary";
    link.href = r.receiptLink;

    cardBody.appendChild(name);
    cardBody.appendChild(servings);
    cardBody.appendChild(des);
    cardBody.appendChild(link);

    showCard.appendChild(br);
    showCard.appendChild(img);
    showCard.appendChild(cardBody);

    col.appendChild(showCard);

    return col;
}