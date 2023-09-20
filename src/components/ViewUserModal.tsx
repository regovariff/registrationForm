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
  zip: number | null;
}

// Define the props for the ViewUserModal component
interface ViewUserModalProps {
  user: User;
  onClose: () => void;
}

function ViewUserModal({ user, onClose }: ViewUserModalProps) {
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal">
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
          <h2>User Details</h2>
          <p>
            <strong>Full Name:</strong> {user.fullname}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Status:</strong> {user.status}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
          <p>
            <strong>City:</strong> {user.city}
          </p>
          <p>
            <strong>Zip Code:</strong> {user.zip}
          </p>
          <p>
            <strong>State:</strong> {user.state}
          </p>
        </div>
      </div>
    </>
  );
}

export default ViewUserModal;
