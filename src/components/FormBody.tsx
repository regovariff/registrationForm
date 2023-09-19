import { useState } from "react";
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
  zip: number | null;
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
    zip: null,
  });

  const [check, setCheck] = useState<boolean>(false);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (check) {
      //save data to local storage/ txt file
    } else {
      console.log("please agree first");
    }
  };

  return (
    <>
      <Form className="mainform mb-5 mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            placeholder="Peter Parker"
            value={person.fullname}
            onChange={(e) => setPerson({ ...person, fullname: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Peter"
            value={person.username}
            onChange={(e) => setPerson({ ...person, username: e.target.value })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={person.email}
              onChange={(e) => setPerson({ ...person, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={person.password}
              onChange={(e) =>
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
            onChange={(e) => setPerson({ ...person, address: e.target.value })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={person.gender}
              onChange={(e) => setPerson({ ...person, gender: e.target.value })}
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
              onChange={(e) => setPerson({ ...person, status: e.target.value })}
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
              onChange={(e) => setPerson({ ...person, city: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={person.state}
              onChange={(e) => setPerson({ ...person, state: e.target.value })}
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
              value={person.zip === null ? "" : person.zip.toString()}
              onChange={(e) =>
                setPerson({
                  ...person,
                  zip:
                    e.target.value === "" ? null : parseInt(e.target.value, 10),
                })
              }
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
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
