import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { alldevices } from "../../features/appSlice";

const NewDevice = () => {
  const dispatch = useDispatch();
  const Categories = [
    "Animal",
    "Bicycle",
    "Boat",
    "Bus",
    "Car",
    "Person",
    "Motorcycle",
  ];
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [group, setGroup] = useState("");
  const [phone, setPhone] = useState("");

  const [contact, setContact] = useState("");
  const [model, setModel] = useState("");
  const [categorie, setCategorie] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };
  const handleModelChange = (event) => {
    setModel(event.target.value);
  };
  const handleCategorieChange = (event) => {
    setCategorie(event.target.value);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const url = "api/devices";
    console.log({
      name: name,
      uniqueId: id,
      groupId: group,
      phone: phone,
      model: model,
      contact: contact,
      category: categorie,
    });
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // what is the item
      body: JSON.stringify({
        name: name,
        uniqueId: id,
        phone: phone,
        model: model,
        contact: contact,
        category: categorie,
      }),
    });
    if (response.ok) {
      // go to devices list using Redux
      console.log("item Added");
      dispatch(alldevices());
    }
  };
  // Select Form Style
  const selectStyle = {
    width: "100%",
    backgroundColor: "#f3f3f3",
    padding: "0.7rem",
    marginBottom: "10px",
    borderRadius: "10px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "300",
    color: "#777777",
    border: "none",
  };
  return (
    <Container>
      <Title>Add Device</Title>
      <Form onSubmit={handleSave}>
        <Input placeholder="Name" type="text" onChange={handleNameChange} />
        <Input placeholder="Identifier" type="text" onChange={handleIdChange} />
        <Input placeholder="Phone" type="text" onChange={handlePhoneChange} />

        <Input
          placeholder="Contact"
          type="text"
          onChange={handleContactChange}
        />
        <Input placeholder="Model" type="text" onChange={handleModelChange} />
        <select style={selectStyle} onChange={handleCategorieChange}>
          {Categories.map((cat) =>
            cat === "Person" ? (
              <option selected value={cat}>
                {cat}
              </option>
            ) : (
              <option value={cat}>{cat}</option>
            )
          )}
        </select>
        <button type="submit">Add Device</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.p`
  font-family: "Roboto";
  font-size: 14 px;
  font-weight: bold;
  color: #3e3e46;
  width: 100%;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #f3f3f3;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    border-radius: 5px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    background-color: #29badf;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #06094c;
    }
`;

const Input = styled.input`
  width: 100%;
  background-color: #f3f3f3;
  padding: 0.7rem;
  border-radius: 10px;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: bold;
  color: #777777;
  border: none;
  margin-bottom: 10px;
`;

export default NewDevice;
