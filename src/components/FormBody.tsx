import { useState, useEffect, useMemo } from "react";

import { StateList } from "../data/StateList";

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
  zip: number;
}

function FormBody() {
  const [person, setPerson] = useState<Person>({
    fullname: "",
    username: "",
    email: "",
    password: "",
    address: "",
    gender: "",
    status: "",
    city: "",
    state: "",
    zip: 34600,
  });

  const [check, setCheck] = useState<boolean>(false);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked === true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (check) {
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
        const newPerson = {
          fullname: person.fullname,
          username: person.username,
          email: person.email,
          password: person.password,
          address: person.address,
          gender: person.gender,
          status: person.status,
          state: person.state,
          zip: person.zip,
          city: person.city,
        };
        const updatedPersons = [...persons, newPerson];
        localStorage.setItem("persons", JSON.stringify(updatedPersons));
      } else {
        window.alert("Fill all the information");
      }
    } else {
      console.log("please agree first");
    }
  };

  const persons = useMemo(() => {
    const storedUsers = localStorage.getItem("persons");
    return storedUsers ? JSON.parse(storedUsers) : [];
  }, []);

  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [person, persons]);

  return (
    <>
      <div className="regForm">
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label htmlFor="fullname">Full Name</label>
            <input
              className="inputContainer"
              type="text"
              value={person.fullname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPerson({ ...person, fullname: e.target.value })
              }
              placeholder="Peter Parker"
            />
          </div>

          <div className="item">
            <label htmlFor="fullname">Username</label>
            <input
              className="inputContainer"
              type="text"
              value={person.username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPerson({ ...person, username: e.target.value })
              }
              placeholder="Peter"
            />
          </div>

          <div className="itemhorizontal">
            <div className="item">
              <label htmlFor="email">Email</label>
              <input
                className="inputContainer"
                type="email"
                value={person.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPerson({ ...person, email: e.target.value })
                }
                placeholder="Email"
              />
            </div>

            <div className="item">
              <label htmlFor="password">Password</label>
              <input
                className="inputContainer"
                type="password"
                value={person.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPerson({ ...person, password: e.target.value })
                }
                placeholder="Password"
              />
            </div>
          </div>

          <div className="item">
            <label htmlFor="address">Address</label>
            <input
              className="inputContainer"
              type="text"
              value={person.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPerson({ ...person, address: e.target.value })
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
                defaultValue={"Choose..."}
                value={person.gender}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setPerson({ ...person, gender: e.target.value })
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
                defaultValue="Choose..."
                value={person.status}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setPerson({ ...person, status: e.target.value })
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
                type="text"
                value={person.city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPerson({ ...person, city: e.target.value })
                }
                placeholder="City"
              />
            </div>

            <div className="item">
              <label htmlFor="status">State</label>
              <select
                name="status"
                className="inputContainer"
                defaultValue="Choose..."
                value={person.state}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setPerson({ ...person, state: e.target.value })
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
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPerson({ ...person, zip: parseInt(e.target.value, 10) })
                }
                placeholder="Zip Code"
              />
            </div>
          </div>

          <div className="checkForm">
            <input type="checkbox" checked={check} onChange={handleCheckbox} />
            <label htmlFor="vehicle1">
              {" "}
              I have read the terms & conditions
            </label>
          </div>

          <div className="buttonBorder">
            <button className="button" type="submit" disabled={!check}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormBody;
