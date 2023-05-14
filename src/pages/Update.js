import { Button, Checkbox, Form } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Update() {
  const [id, setID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
    console.log("------------", localStorage.getItem("ID"));
  }, []);
  const updateData = (id) => {
    axios.put(`https://645bc345a8f9e4d6e772608a.mockapi.io/users/${id}`, {
      firstName,
      lastName,
      checkbox,
    });
  };
  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          checked={checkbox}
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button onClick={() => updateData(id)} type="submit">
        Update
      </Button>
    </Form>
  );
}

export default Update;
