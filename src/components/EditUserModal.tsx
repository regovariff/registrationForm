import { useState } from "react";
import { StateList } from "../data/StateList";

interface User {
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

// Define the props for the ViewUserModal component
interface ViewUserModalProps {
  user: User;
  onClose: () => void;
  setUpdatedPersons: any;
}

function EditUserModal({
  user,
  onClose,
  setUpdatedPersons,
}: ViewUserModalProps) {
  const [person, setPerson] = useState<User>({
    fullname: user.fullname,
    username: user.username,
    email: user.email,
    password: user.password,
    address: user.address,
    gender: user.gender,
    status: user.status,
    city: user.city,
    state: user.state,
    zip: user.zip,
  });

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      person.fullname &&
      person.username &&
      person.email &&
      person.password &&
      person.address &&
      person.gender &&
      person.status &&
      person.state &&
      person.zip &&
      person.city
    ) {
      // Create a new array with the updated person
      const newUpdatedPersons = JSON.parse(
        localStorage.getItem("persons") || "[]"
      ).map((p: User) => {
        if (p.username === user.username) {
          return person;
        }
        return p;
      });

      // Save the updated array to localStorage
      localStorage.setItem("persons", JSON.stringify(newUpdatedPersons));
      setUpdatedPersons(newUpdatedPersons);
      onClose();
    } else {
      window.alert("Fill all the information");
    }
  };

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal">
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
          <h2>Edit User Details</h2>
          <div className="regForm">
            <form onSubmit={handleUpdate}>
              <div className="item">
                <label htmlFor="fullname">Full Name</label>
                <input
                  className="inputContainer"
                  name="fullname"
                  type="text"
                  value={person.fullname}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPerson({ ...user, fullname: e.target.value })
                  }
                  placeholder="Peter Parker"
                />
              </div>

              <div className="item">
                <label htmlFor="fullname">Username</label>
                <input
                  className="inputContainer"
                  name="username"
                  type="text"
                  value={person.username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPerson({ ...user, username: e.target.value })
                  }
                  placeholder="Peter"
                />
              </div>

              <div className="itemhorizontal">
                <div className="item">
                  <label htmlFor="email">Email</label>
                  <input
                    className="inputContainer"
                    name="email"
                    type="email"
                    value={person.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPerson({ ...user, email: e.target.value })
                    }
                    placeholder="Email"
                  />
                </div>

                <div className="item">
                  <label htmlFor="password">Password</label>
                  <input
                    className="inputContainer"
                    name="password"
                    type="password"
                    value={person.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPerson({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="item">
                <label htmlFor="address">Address</label>
                <input
                  className="inputContainer"
                  name="address"
                  type="text"
                  value={person.address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPerson({ ...user, address: e.target.value })
                  }
                  placeholder="Address"
                />
              </div>

              <div className="itemhorizontal">
                <div className="item">
                  <label htmlFor="gender">Gender</label>
                  <select
                    name="gender"
                    className="inputContainer"
                    value={person.gender}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setPerson({ ...user, gender: e.target.value })
                    }
                  >
                    <option value="">Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="item">
                  <label htmlFor="status">Status</label>
                  <select
                    name="status"
                    className="inputContainer"
                    value={person.status}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setPerson({ ...user, status: e.target.value })
                    }
                  >
                    <option value="">Choose...</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="itemhorizontal">
                <div className="item">
                  <label htmlFor="city">City</label>
                  <input
                    className="inputContainer"
                    name="city"
                    type="text"
                    value={person.city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPerson({ ...user, city: e.target.value })
                    }
                    placeholder="City"
                  />
                </div>

                <div className="item">
                  <label htmlFor="status">State</label>
                  <select
                    name="status"
                    className="inputContainer"
                    value={person.state}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setPerson({ ...user, state: e.target.value })
                    }
                  >
                    <option>Choose...</option>
                    {StateList.map((stateName, index: any) => (
                      <option key={index}>{stateName}</option>
                    ))}
                  </select>
                </div>

                <div className="item">
                  <label htmlFor="zip">Zip Code</label>
                  <input
                    className="inputContainer"
                    name="zip"
                    type="text"
                    value={person.zip}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPerson({
                        ...user,
                        zip: e.target.value,
                      })
                    }
                    placeholder="Zip Code"
                  />
                </div>
              </div>

              <div className="buttonBorder">
                <button className="button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUserModal;
