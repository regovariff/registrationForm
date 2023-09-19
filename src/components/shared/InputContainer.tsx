interface InputContainerProps {
    children: React.ReactNode;
  }
  
  const InputContainer: React.FC<InputContainerProps> = ({ children }) => {
    return (
      <div className="inputContainer">
        {children}
      </div>
    )
  }
  
  export default InputContainer;