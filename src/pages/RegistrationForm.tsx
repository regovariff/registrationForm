import FormBody from "../components/FormBody";
import FormTable from "../components/FormTable";

function RegistrationForm() {
  return (
    <>
      <h1 className="headtitle">Registration Form</h1>
      <FormBody />
      <h1 className="headtitle">Registered User</h1>
      <FormTable />
    </>
  );
}

export default RegistrationForm;
