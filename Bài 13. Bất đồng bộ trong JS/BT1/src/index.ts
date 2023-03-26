import axios from 'axios';

const getData = async() => {
    try {
        for (let index = 1; index <= 20; index++){
            const showPKM = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
            console.log(index +", "+ showPKM.data.species.name);
            console.log(showPKM.data.types[0]);
            if (showPKM.data.types[1]){
                console.log(showPKM.data.types[1]);
            }
        }
    } catch (error) {
        console.log("Không thể lấy dữ liệu");
        // console.log(error);
    }
}

getData();