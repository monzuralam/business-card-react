import React, { Component } from "react";
import Card from "../components/card/card";
class Home extends Component {
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
              return <Card data={user} key={user?.id} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
