import Table from "react-bootstrap/Table";

export default function MyPlayLists({ data }) {
  return (
    <div>
      <h1> My PlayLists</h1>
      <Table striped bordered responsive="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Remove</th>
          </tr>
        </thead>

        {data.map((data) => (
          <tbody key={data.id}>
            <tr>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
