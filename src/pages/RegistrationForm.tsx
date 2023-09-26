import { useEffect, useState } from "react";

import FormBody from "../components/FormBody";
import FormTable from "../components/FormTable";

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

function RegistrationForm() {
  const [updatedPersons, setUpdatedPersons] = useState<Person[]>([]);

  const fetchUsers = () => {
    try {
      const allUsers = localStorage.getItem("persons");
      if (!allUsers) return;
      const allParsedUsers = JSON.parse(allUsers);
      setUpdatedPersons(allParsedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="headtitle">Registration Form</h1>
      <div className="container">
        <FormBody updatedPersons={updatedPersons} setUpdatedPersons={setUpdatedPersons}/>
      </div>
      <h1 className="headtitle">Registered User</h1>
      <div className="container">
        <FormTable updatedPersons={updatedPersons} setUpdatedPersons={setUpdatedPersons}/>
      </div>
    </>
  );
}

export default RegistrationForm;
