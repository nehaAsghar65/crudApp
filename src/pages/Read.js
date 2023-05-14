import { Table, Button } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Read() {
  const [apiData, setApiData] = useState([]);
  const onDelete = (id) => {
    axios
      .delete(`https://645bc345a8f9e4d6e772608a.mockapi.io/users/${id}`)
      .then(() => {
        getData();
      });
  };
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
    console.log(localStorage.getItem("ID"));
  };
  const getData = () => {
    axios
      .get(`https://645bc345a8f9e4d6e772608a.mockapi.io/users`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };
  useEffect(() => {
    axios
      .get("https://645bc345a8f9e4d6e772608a.mockapi.io/users")
      .then((response) => {
        setApiData(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <div>
      <Table singleLine>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Checked</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {apiData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>
                    {data.checkbox ? "Checked" : "Unchecked"}
                  </Table.Cell>
                  <Link to="/update">
                    <Table.Cell>
                      <Button onClick={() => setData(data)}>Update</Button>
                    </Table.Cell>
                  </Link>
                  <Table.Cell>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Table>
    </div>
  );
}

export default Read;
