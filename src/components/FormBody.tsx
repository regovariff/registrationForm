import { useState, useEffect, useMemo } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

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
        window.alert("Fill all the information")
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
      <Form className="mainform mb-5 mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            placeholder="Peter Parker"
            value={person.fullname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPerson({ ...person, fullname: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Peter"
            value={person.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPerson({ ...person, username: e.target.value })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={person.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPerson({ ...person, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={person.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPerson({ ...person, password: e.target.value })
              }
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={person.address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPerson({ ...person, address: e.target.value })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={person.gender}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPerson({ ...person, gender: e.target.value })}
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={person.status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPerson({ ...person, status: e.target.value })}
            >
              <option>Choose...</option>
              <option>Single</option>
              <option>Married</option>
              <option>Prefer not to say</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={person.city}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPerson({ ...person, city: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={person.state}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPerson({ ...person, state: e.target.value })}
            >
              <option>Choose...</option>
              {StateList.map((stateName, index: any) => (
                <option key={index}>{stateName}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPerson({ ...person, zip: parseInt(e.target.value, 10) })}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I have read the terms & conditions"
            checked={check}
            onChange={handleCheckbox}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" disabled={!check}>
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormBody;
