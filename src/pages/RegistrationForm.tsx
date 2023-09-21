import FormBody from "../components/FormBody";
import FormTable from "../components/FormTable";

function RegistrationForm() {
  return (
    <>
      <h1 className="headtitle">Registration Form</h1>
      <div className="container">
        <FormBody />
      </div>
      <h1 className="headtitle">Registered User</h1>
      <div className="container">
        <FormTable />
      </div>
    </>
  );
}

export default RegistrationForm;
