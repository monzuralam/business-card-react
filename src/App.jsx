import { Component } from "react";
import "@fontsource-variable/montserrat";
class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          id: "1",
          name: "Monzur alam",
          phone: "+8801700112233",
          email: "mail@example.com",
          website: "example.com",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((response) =>
        this.setState(
          () => {
            return { users: response };
          },
          () => {
            console.log(response);
          }
        )
      );
  }

  render() {
    const { users } = this.state;
    return (
      <>
        <div className="container mx-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-4 md:gap-x-4 md:gap-y-4">
            {users.map((user) => {
              let name = user.name.slice(0, 22);
              console.log(name);
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
                <div className="card-item border" key={user.id}>
                  <div className="card-header bg-gray-700 p-4 flex flex-wrap justify-between items-center">
                    <div className="card-header-left">
                      <h3 className="text-xl text-white dark:text-black">
                        {name}
                      </h3>
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
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
