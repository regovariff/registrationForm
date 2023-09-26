import { useEffect, useMemo, useState } from "react";

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

  const persons: any = useMemo(() => {
    const oldStoredUsers = localStorage.getItem("persons");
    return oldStoredUsers ? JSON.parse(oldStoredUsers) : [];
  }, []);

  useEffect(() => {
    if (persons) {
      setUpdatedPersons(persons);
    }
  }, [persons]);

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
