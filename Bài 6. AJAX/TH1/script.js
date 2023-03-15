let employees = [];
const tbodyElement = document.querySelector("tbody")
function getEmployees(){
    axios.get("https://jsonplaceholder.typicode.com/users").then(function(res){
        employees = res.data;
        render();
    })
}
function render(){
    const trElements = employees.map(function (employee){
        return `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.username}</td>
            <td>${employee.email}</td>
        </tr>
        `;
    });
    tbodyElement.innerHTML = trElements.join("");
}
getEmployees();