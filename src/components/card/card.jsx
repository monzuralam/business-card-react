import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const user = this.props.data;
    let name = user.name.slice(0, 22);
    let phone = user.phone.replaceAll(".", "-");
    phone = phone.slice(0, 13);
    let avatar = user.name;
    avatar = avatar.replaceAll(" ", "+");
    avatar = "https://ui-avatars.com/api/?name=" + avatar;
    let email = user?.email;
    email = email.toLocaleLowerCase();
    let address =
      user?.address?.suite +
      ", " +
      user?.address?.zipcode +
      ", " +
      user?.address?.city;
    let website = user?.website;
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
            </div>
            <div className="card-header-right">
              <img className="rounded-full" src={avatar} alt={name} />
            </div>
          </div>
          <div className="card-body p-4">
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{website}</p>
          </div>
        </div>
      </>
    );
  }
}
