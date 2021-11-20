function ClickMe() {
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json()) 
        .then((jsonBody) => {
            buildProductsList(jsonBody);
        });  
}

function buildProductsList(products) {
    var img = document.getElementById("div");
    for (let product of products) {
        var a = document.createElement("img");
        let f = product.image;
        let l = product.title;
        text = f.textContent || f.innerText;
        a.src = text;
        a.width = 80;
        a.height = 80;
        a.alt = 'xyz';
        document.write(product.id);
        document.write("<br>");
        document.body.appendChild(a);
        document.write("<br>");
        document.write(product.title);
        document.write("<br>");
        document.write(product.price);
        document.write("<br>");
        document.write(product.description);
        document.write("<br>");
        document.write(product.category);
        document.write("<br>");
    } 
}
    
function showName() {
    ClickMe();   
}


