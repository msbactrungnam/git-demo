let list = [];
let hinhanh = [];
let loai = [];
const listPKM = document.querySelector("#list_pkm");
const imgPKM = document.querySelector("#anh_pkm");

function getData() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`).then(function(res) {
        list = res.data.results;
        render();
    });
}
function render() {
    let i = 1;
    const dulieu = list.map(function(pkm) {
        return `
                <div id="chi_tiet"><p>${i++}. ${pkm.name}</p></div>
        `;
    });
    listPKM.innerHTML = dulieu.join("");
    const thong_tin = document.querySelectorAll("#chi_tiet");
    thong_tin.forEach(function (value, index){
        value.addEventListener("click", function () {
            showThongTin(index);
        });
    });
}
getData();

function showThongTin(index) {
    temp = index + 1;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${temp}`).then(function(res) {
        hinhanh = res.data.sprites.back_default;
        loai = res.data.types;
    });
    if (loai.length == 2){
        return imgPKM.innerHTML = `
            <div class = "ha">
                <img src="${hinhanh}">
            </div>
            <div>
            <span class = "a">${loai[0].type.name}</span>
            <span class = "b">${loai[1].type.name}</span>
            </div>
        `;
    }
    if (loai.length == 1){
    return imgPKM.innerHTML = `
            <div class = "ha">
                <img src="${hinhanh}">
            </div>
            <div>
            <span class = "a">${loai[0].type.name}</span>
            </div>
        `;
    }
}
