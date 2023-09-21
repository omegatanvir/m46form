import { useState } from "react";

const StrateFullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("please provide more 6 digit number or latter");
    } else {
      setError("");
      console.log(password, email, name, error);
    }

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" /> <br />
        <input onChange={handleEmailChange} type="email" name="email" /> <br />
        <input
          onChange={handlePassword}
          type="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StrateFullForm;
