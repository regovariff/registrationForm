import { useState, useEffect, useMemo } from "react";

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
  const [data, setData] = useState<Person[]>([]);

  const persons = useMemo(() => {
    const storedData = localStorage.getItem("persons");
    return storedData ? JSON.parse(storedData) : [];
  }, []);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("persons");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [persons]);

  return (
    <>
      <table className="formTable">
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Gender</th>
          <th>City</th>
          <th>Zip Code</th>
          <th>State</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {data.map((person: Person, index: number) => (
          <tr key={index}>
            <td scope="row">{index + 1}</td>
            <td>{person.username}</td>
            <td>{person.email}</td>
            <td>{person.gender}</td>
            <td>{person.city}</td>
            <td>{person.zip}</td>
            <td>{person.state}</td>
            <td>{person.status}</td>
            <td>
              <button className="button">View</button>
              <button className="button">Edit</button>
              <button className="button">Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default FormTable;
