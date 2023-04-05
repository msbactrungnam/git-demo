import { useState } from 'react';

const DemoComponent = (props) => {
    return (
        <div>
            <div>Đây là tuổi: {props.age}</div>
            <div>Đây là tên: {props.name}</div>
        </div>
    )
}

function App_TH3() {
    const [age, setAge] = useState(18);
    const onIncreaseAge = () => {
        setAge(age + 1);
    };
    const [name, setName] = useState('Công');
return (
    <div className='container'>
        <div>{age}</div>
        <button onClick={onIncreaseAge}>Tăng age lên 1</button>
        <DemoComponent age={age} name={name}/>
    </div>
    );
}
export default App_TH3;