import { useState } from "react";
import { Card, Input, Button, Heading } from "../../components";
import "./RegistrationContainer.module.css";

const RegistrationContainer = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [dob, setDob] = useState<string>();
  const [address, setAdress] = useState<string>();
  const [city, setCity] = useState<string>();
  const [state, setState] = useState<string>();
  const [zip, setZip] = useState<string>();
  const [uName, setUName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [page, setPage] = useState<number>(1);

  const increase = () => {
    setPage((page) => (page < 3 ? page + 1 : 3));
  };
  const decrease = () => {
    setPage((page) => (page > 1 ? page - 1 : 1));
  };

  return (
    <Card>
      <Heading title={"Registration (" + page + "/3)"} />
      {page === 1 && (
        <Input
          placeholder="Full Name"
          type="text"
          value={name}
          onChange={setName}
        />
      )}

      {page === 1 && (
        <Input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
        />
      )}

      {page === 1 && (
        <Input
          placeholder="Date of Birth"
          type="date"
          value={dob}
          onChange={setDob}
        />
      )}
      {page === 1 && (
        <Button
          value="Next"
          onClick={increase}
          disable={!name || !email || !dob}
        />
      )}
      {page === 2 && (
        <Input
          placeholder="Street Address"
          type="text"
          value={address}
          onChange={setAdress}
        />
      )}

      {page === 2 && (
        <Input placeholder="City" type="text" value={city} onChange={setCity} />
      )}
      {page === 2 && (
        <Input
          placeholder="State"
          type="text"
          value={state}
          onChange={setState}
        />
      )}

      {page === 2 && (
        <Input
          placeholder="ZIP Code"
          type="text"
          value={zip}
          onChange={setZip}
        />
      )}

      {page === 2 && (
        <Button
          value="Next"
          onClick={increase}
          disable={!address || !city || !state || !zip}
        />
      )}

      {page === 3 && (
        <Input
          placeholder="Username"
          type="text"
          value={uName}
          onChange={setUName}
        />
      )}
      {page === 3 && (
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
      )}

      {page === 3 && (
        <Button
          value="Submit"
          onClick={increase}
          disable={!uName || !password}
        />
      )}

      <Button value="Back" onClick={decrease} />
    </Card>
  );
};

export default RegistrationContainer;
