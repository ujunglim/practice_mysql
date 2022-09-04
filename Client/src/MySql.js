import { useState } from "react";

const MySql = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    setEmail(evt.target[0].value);
    console.log(evt.target[0].value);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: evt.target[0].value }),
    };

    fetch("http://localhost:5000/api/email", requestOptions)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setFirstname(data.firstname);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="Eemail" required />
      </form>
      <p>{firstname}</p>
    </div>
  );
};

export default MySql;
