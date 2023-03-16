let menu = [];
const listMenu = document.querySelector("ul");
function getData() {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`).then(function(res) {
        menu = res.data.meals;
        console.log(menu);
        render();
    });
}
function render() {
    const dulieu = menu.map(function(m) {
        return `
        <li class="list-group-item">
            <img src="${m.strMealThumb}">
            <span>${m.strMeal}</span>
        </li>
        `;
    });
    listMenu.innerHTML = dulieu.join("");
}
getData();

