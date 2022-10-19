import "./App.css";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import MyPlayLists from "./MyPlayLists";

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [add, setAdd] = useState(false);
  const [myPlayList, setMyPlayList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setUsers(res.data));
  }, [searchValue]);
  console.log(users);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleAdd = (data) => {
    setMyPlayList([...myPlayList, data]);
    setAdd(true);
  };
  console.log(myPlayList);
  const handleRemove = (user) => {
    setMyPlayList(myPlayList.filter((item) => item.id !== user.id));
  };
  return (
    <div className="App">
      <h1>PlayList</h1>
      <span>
        <input
          onChange={handleSearch}
          placeholder="Search title"
          type="text"
          width="200px"
        />
      </span>
      <br />
      <br />

      <Table striped bordered responsive="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Add/Remove from Playlist</th>
          </tr>
        </thead>
        {filteredUsers.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.title}</td>
                <td>{item.body}</td>

                <button onClick={() => handleAdd(item)}>Add</button>

                <button onClick={() => handleRemove(item)}>Remove</button>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <div>{add && <MyPlayLists data={myPlayList} />}</div>
    </div>
  );
}

export default App;
