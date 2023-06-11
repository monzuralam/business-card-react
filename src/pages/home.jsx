import { Component } from "react";
import Card from "../components/card/card";
import Search from "../components/search/search-box.component";
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
      searchField: "",
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

  /**
   * On Search Change function
   * @param {*} event
   */
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { users, searchField } = this.state;
    const { onSearchChange } = this;
    // filter cards
    const filterCards = users.filter((user) => {
      let fullName = user.firstName + " " + user.lastName;
      console.log(fullName);
      return fullName.toLocaleLowerCase().includes(searchField);
    });

    return (
      <>
        <Search onChangeHandler={onSearchChange} placeholder="Search Cards" />
        <div className="container mx-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-4 md:gap-x-4 md:gap-y-4">
            {filterCards.map((user) => {
              return <Card data={user} key={user?.id} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
