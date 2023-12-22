import { useState } from "react";
import { Card, Input, Button, Heading, Text } from "../../components";
import { Formik, Form, useFormik } from "formik";
import * as yup from "yup";

interface Props {
  onNext?: () => void;
  handleBack: () => void;
}

const AccountInformation = ({ handleBack, onNext }: Props) => {
  const formMik = useFormik({
    initialValues: {
      uName: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      //   resetForm();
      handleBack();
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .min(8, "Username must be at least 8 chracters")
        .required("Please fill the username"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/, //char / uppercse / number / symbol / combination /digit
          "Password combination must be at least 10 characters, include at least one lowercase letter, one uppercase letter, one number, and one special character"
        )
        .required("Please fill the passord"),
    }),
  });
  return (
    <Card>
      <Heading title={"Registration"} />
      <form onSubmit={formMik.handleSubmit}>
        <Input
          placeholder="Username"
          type="text"
          value={formMik.values.uName}
          onChange={formMik.handleChange("uName")}
          name={"uName"}
        />
        {formMik.errors.uName && <Text>{formMik.errors.uName}</Text>}

        <Input
          placeholder="Password"
          type="password"
          value={formMik.values.password}
          onChange={formMik.handleChange("password")}
          name={"password"}
        />

        <Button label="Submit" type={"submit"} />

        <Button label="Back" type="submit" onClick={handleBack} />
      </form>
    </Card>
  );
};

export default AccountInformation;
