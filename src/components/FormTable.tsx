import { useState, useEffect, useMemo } from "react";
import FormBody from "./FormBody";
import ViewUserModal from "./ViewUserModal";

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
  const [display, setDisplay] = useState(false);
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
    setDisplay(true);
  };

  const editUser = () => {
    console.log("edit");
  };

  const deleteUser = () => {
    console.log("delete");
  };

  return (
    <>
      {/* <div id="user-edit-form" className="user-edit-form">
        <form id="prompt-form">
          <div id="prompt-message">Edit User</div>
          <FormBody />
          <input type="button" name="cancel" value={"Cancel"} />
        </form>
      </div> */}
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
                <button className="button" onClick={editUser}>
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
      {display && selectedUser && (
        <ViewUserModal user={selectedUser} onClose={() => setDisplay(false)} />
      )}
    </>
  );
}

export default FormTable;
