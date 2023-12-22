import { useState } from "react";
import { Card, Input, Button, Heading, Text } from "../../components";
import { Formik, Form, useFormik } from "formik";
import * as yup from "yup";

interface Props {
  onNext: () => void;
}
const PersonalInformation = ({ onNext }: Props) => {
  // const [name, setName] = useState<string>();
  // const [email, setEmail] = useState<string>();
  // const [dob, setDob] = useState<string>();
  // const [address, setAdress] = useState<string>();
  // const [city, setCity] = useState<string>();
  // const [state, setState] = useState<string>();
  // const [zip, setZip] = useState<string>();
  // const [uName, setUName] = useState<string>();
  // const [password, setPassword] = useState<string>();

  // const [page, setPage] = useState<number>(1);

  const forMik = useFormik({
    initialValues: {
      name: "",
      email: "",
      dob: "",
    },
    onSubmit: (values) => {
      console.log(values);
      onNext();
    },
    validationSchema: yup.object({
      name: yup.string().required("Please enter your full name"),
      email: yup
        .string()
        .email("Please enter the correct email address")
        .required("Please enter your email address"),
      dob: yup
        .date()
        .max(new Date(), "Please enter the correct birth date")
        .required("Please enter your birth date"),
    }),
  });
  return (
    <Card>
      <Heading title={"Registration"} />

      <form onSubmit={forMik.handleSubmit}>
        <Input
          placeholder="Full Name"
          type="text"
          value={forMik.values.name}
          name={"name"}
          onChange={forMik.handleChange("name")}
        />
        {forMik.errors.name && <Text>{forMik.errors.name}</Text>}
        <Input
          placeholder="Email Address"
          type="email"
          value={forMik.values.email}
          onChange={forMik.handleChange("email")}
          name={"email"}
        />
        {forMik.errors.email && <Text>{forMik.errors.email}</Text>}
        <Input
          placeholder="Date of Birth"
          type="date"
          value={forMik.values.dob}
          onChange={forMik.handleChange("dob")}
          name={"dob"}
        />
        {forMik.errors.dob && <Text>{forMik.errors.dob}</Text>}
        <Button label="Next" type={"submit"} />

        {/* <Button label="Back" type="submit" /> */}
      </form>
    </Card>
  );
};

export default PersonalInformation;
