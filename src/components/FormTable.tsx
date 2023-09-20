import { useState, useEffect, useMemo } from "react";
import ViewUserModal from "./ViewUserModal";
import EditUserModal from "./EditUserModal";

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
  zip: string;
}

function FormTable() {
  const [data, setData] = useState<Person[]>([]);
  const [displayViewModal, setDisplayViewModal] = useState(false);
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Person | null>(null);

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

  const viewUser = (user: Person) => {
    setSelectedUser(user);
    setDisplayViewModal(true);
  };

  const editUser = (user: Person) => {
    setSelectedUser(user);
    setDisplayEditModal(true);
  };

  const deleteUser = () => {
    console.log("delete");
  };

  return (
    <>
      <table className="formTable">
        <thead>
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
        </thead>
        <tbody>
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
                <button className="button" onClick={() => viewUser(person)}>
                  View
                </button>
                <button className="button" onClick={() => editUser(person)}>
                  Edit
                </button>
                <button className="button" onClick={deleteUser}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {displayViewModal && selectedUser && (
        <ViewUserModal user={selectedUser} onClose={() => setDisplayViewModal(false)} />
      )}
      {displayEditModal && selectedUser && (
        <EditUserModal user={selectedUser} onClose={() => setDisplayEditModal(false)} />
      )}
    </>
  );
}

export default FormTable;
