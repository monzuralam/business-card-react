import { Component } from "react";
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
    fetch("https://dummyjson.com/users/?limit=99")
      .then((response) => response.json())
      .then((response) =>
        this.setState(
          () => {
            return { users: response.users };
          },
          () => {
            console.log(response.users);
          }
        )
      );
  }

  render() {
    const { users } = this.state;
    return (
      <>
        <div className="container mx-auto py-6">
          <input
            type="search"
            name="search"
            className="search-box border px-4 py-3"
            placeholder="Search Cards"
            onChange={(event) => {
              console.log(event.target.value);
              const searchString = event.target.value.toLocaleLowerCase();
              // filter cards
              const filterCards = this.state.users.filter((user) => {
                let fullName = user.firstName + " " + user.lastName;
                fullName.toLocaleLowerCase();
                console.log(fullName);
                return fullName.includes(searchString);
              });

              this.setState(() => {
                return { users: filterCards };
              });
            }}
          />
        </div>
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
