import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const user = this.props.data;
    let name = user?.firstName + " " + user?.lastName;
    let position = user?.company?.title;
    let avatar = user?.image;
    let department = user?.company?.department;
    let company = user?.company?.name;
    let phone = user?.phone;
    let email = user?.email;
    let website = user?.domain;
    let address =
      user?.address?.address +
      ", " +
      user?.address?.city +
      ", " +
      user?.address?.state +
      " " +
      user?.address?.postalCode;
    let qrcode =
      "https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=" +
      name +
      ", " +
      phone +
      ", " +
      email +
      ", " +
      website +
      " ";
    return (
      <>
        <div className="card-item border" key={user.id}>
          <div className="card-header bg-gray-700 p-4 flex flex-wrap justify-between items-center">
            <div className="card-header-left">
              <h3 className="text-xl text-white dark:text-black">{name}</h3>
              <p className="text-white dark:text-black">{position}</p>
            </div>
            <div className="card-header-right bg-white rounded-full overflow-hidden">
              <img className="w-12" src={avatar} alt={name} />
            </div>
          </div>
          <div className="card-body p-4">
            <p>{phone}</p>
            <p>{email}</p>
            <p>{website}</p>
            <p>{address}</p>
          </div>
        </div>
      </>
    );
  }
}
