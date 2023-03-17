let list = [];
let hinhanh = [];
let loai = [];
let sl = [];
const listPKM = document.querySelector("#list_pkm");
const imgPKM = document.querySelector("#anh_pkm");

function getData() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`).then(function(res) {
        list = res.data.results;
        render();
    });
}
function render() {
    let i = 0;
    let y = 0;
    const dulieu = list.map(function(pkm) {
        return `
                <div onclick="showThongTin(${i++})" id="chi_tiet"><p>${y++}. ${pkm.name}</p></div>
        `;
    });
    listPKM.innerHTML = dulieu.join("");
}
getData();

function showThongTin(index) {
    temp = index + 1;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${temp}`).then(function(res) {
        hinhanh = res.data.sprites.back_default;
        loai = res.data.types;
        sl = loai.length;
        if (sl == 2){
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
        if (sl == 1){
        return imgPKM.innerHTML = `
                <div class = "ha">
                    <img src="${hinhanh}">
                </div>
                <div>
                <span class = "a">${loai[0].type.name}</span>
                </div>
            `;
        }
    }); 
}
