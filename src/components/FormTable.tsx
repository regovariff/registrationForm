import { useState, useEffect } from "react";

interface Person {
  fullname: string;
  username: string;
  email: string;
  password: string;
  address: string;
  gender: string;
  status: string;
  city: string;
  state: string;
  zip: number | null;
}

function FormTable() {
  // State to hold the data from local storage
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage and parse it
    const storedData = localStorage.getItem("persons");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <table className="table table-dark table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fullname</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person: Person, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{person.fullname}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
              <td>{person.address}</td>
              <td>{person.gender}</td>
              <td>{person.status}</td>
              <td>{person.city}</td>
              <td>{person.state}</td>
              <td>{person.zip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FormTable;
