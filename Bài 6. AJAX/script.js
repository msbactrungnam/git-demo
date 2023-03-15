function loadXMLDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        console.log(xhttp);
        if(this.readyState == 4 && this.status == 200){
            console.log(JSON.parse(this.response));
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true)
    xhttp.send();

}
function fetchProducts(){
    fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
        res.json().then(function(data){
            console.log(data);
        })
    }) // cách 1
    const data = fetch("https://jsonplaceholder.typicode.com/users");
    data.then(function(response){
        response.json().then(function(res){
            console.log(res);
        })
    }) // cách 2
}
function loadProducts(p) {

    axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${p.limit}&_page=${p.page}`).then(function(res){
        console.log(res.data);
    })
}
// loadXMLDoc();
// fetchProducts();
const backButton = document.querySelector("#backBtn");
const nextButton = document.querySelector("#nextBtn");
let limit = 5;
let page = 1;
backButton.addEventListener("click", function(e){
    loadProducts({
        limit: limit,
        page: page - 1,
    }

        );
});
nextButton.addEventListener("click", function(e){
    loadProducts({
        limit: limit,
        page: page + 1,
    });
});
