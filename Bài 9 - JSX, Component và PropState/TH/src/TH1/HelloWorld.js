import React from 'react';
export default function HelloWorld() {
    let name = "Đạt";
    const user = {
        firstName: "Phùng Bá",
        lastName: "Công"
    };
    const fullName = (user) => {
        return user.firstName + " " + user.lastName;
    };
    return (
    <div>
        <div>HelloWorld</div>
        <div>Xin chào: {name} và {fullName(user)}</div>
        <div>Rất vui được gặp bạn</div>
        <div>{name == "Cường"? "Xin chào Cường":`Xin chào ${fullName(user)}`}</div>
        {/* <div>Rất vui được gặp bạn</div> */}
    </div>
    );
}