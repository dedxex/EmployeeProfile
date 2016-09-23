import React from 'react';
const EmployeeDetail = ({employee}) => {
    const { name,email,phone,avatar } = employee;
    return (
        <div>
            <div className="card thumb">
            <img className="card-img-top" src={avatar} alt="Card image cap" />
            <div className="card-block">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{email}</p>
            <p className="card-text">{phone}</p>
            </div>
            </div>
        </div>
    );
}
export default EmployeeDetail;