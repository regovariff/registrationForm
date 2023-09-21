import { useState, useEffect } from "react";
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

  const storedData = localStorage.getItem("persons");
  let newStoredData:any = null;

  if (storedData) {
    newStoredData = JSON.parse(storedData);
  }

  useEffect(() => {
    setData(newStoredData);
  }, []);

  // useEffect(() => {
  //   // Retrieve data from local storage
  //   const storedData = localStorage.getItem("persons");
  //   if (storedData) {
  //     setData(JSON.parse(storedData));
  //   }
  // }, []);

  const viewUser = (user: Person) => {
    setSelectedUser(user);
    setDisplayViewModal(true);
  };

  const editUser = (user: Person) => {
    setSelectedUser(user);
    setDisplayEditModal(true);
  };

  const deleteUser = (userToDelete: Person) => {
    if (window.confirm("Delete?")) {
      const storedDataString = localStorage.getItem("persons");

      if (storedDataString) {
        const storedData = JSON.parse(storedDataString);

        // Find the index of the user to delete based on username
        const indexToDelete = storedData.findIndex(
          (user: Person) => user.username === userToDelete.username
        );

        if (indexToDelete !== -1) {
          storedData.splice(indexToDelete, 1);

          const updatedDataString = JSON.stringify(storedData);

          localStorage.setItem("persons", updatedDataString);

          setData(storedData);
        }
      }
    }
  };

  return (
    <>
      <table className="formTable">
        <thead>
          <tr>
            <th>No</th>
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
                <button className="button" onClick={() => deleteUser(person)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {displayViewModal && selectedUser && (
        <ViewUserModal
          user={selectedUser}
          onClose={() => setDisplayViewModal(false)}
        />
      )}
      {displayEditModal && selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setDisplayEditModal(false)}
        />
      )}
    </>
  );
}

export default FormTable;
