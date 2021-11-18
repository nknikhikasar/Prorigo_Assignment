fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => console.log(data))
/*const api_url =
    "https://fakestoreapi.com/products";

// Defining async function
async function getapi("https://fakestoreapi.com/products") {

    // Storing response
    const response = await fetch("https://fakestoreapi.com/products);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi("https://fakestoreapi.com/products");
function show(data) {
    let tab =
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;

    // Loop to access all rows 
    for (let product of products) {
        tab += `<tr> 
    <td>${product.id} </td>
    <td>${product.title}</td>
    <td>${product.price}</td>
    <td>${product.description}</td>
</tr>`;
    }
}
*/