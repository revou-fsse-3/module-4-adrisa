import { useState } from "react";
import { Card, Input, Button, Heading, Text } from "../../components";

import { Formik, Form, useFormik } from "formik";
import * as yup from "yup";

interface Props {
  //   resetForm: () => void;
  handleBack: () => void;
  onNext: () => void;
}

const AddressInformation = ({ onNext, handleBack }: Props) => {
  const formMik = useFormik({
    initialValues: {
      address: "",
      city: "",
      state: "",
      zip: "",
    },
    onSubmit: (values) => {
      console.log(values);
      onNext();
      //   handleBack();
      //   resetForm();
    },
    validationSchema: yup.object({
      address: yup
        .string()
        .min(10, "Please fill the correct addess")
        .required("Please fill the address"),
      city: yup
        .string()
        .min(4, "Please fill the correct city")
        .required("Please fill the city"),
      state: yup
        .string()
        .min(4, "Please fill the correct state")
        .required("Please fill the state"),
      zip: yup
        .string()
        .matches(/^\d{5}$/, "Please fill valid zip code")
        .required("Please fill the zip code"),
    }),
  });
  return (
    <Card>
      <Heading title={"Registration"} />

      <form onSubmit={formMik.handleSubmit}>
        <Input
          placeholder="Street Address"
          type="text"
          value={formMik.values.address}
          onChange={formMik.handleChange("address")}
          name={"address"}
        />
        {formMik.errors.address && <Text>{formMik.errors.address}</Text>}
        <Input
          placeholder="City"
          type="text"
          value={formMik.values.city}
          onChange={formMik.handleChange("city")}
          name={"city"}
        />
        {formMik.errors.city && <Text>{formMik.errors.city}</Text>}
        <Input
          placeholder="State"
          type="text"
          value={formMik.values.state}
          onChange={formMik.handleChange("state")}
          name={"state"}
        />
        {formMik.errors.state && <Text>{formMik.errors.state}</Text>}
        <Input
          placeholder="ZIP Code"
          type="text"
          value={formMik.values.zip}
          onChange={formMik.handleChange("zip")}
          name={"zip"}
        />
        {formMik.errors.zip && <Text>{formMik.errors.zip}</Text>}
        <Button label="Next" type={"submit"} />
        <Button label="Back" type="submit" onClick={handleBack} />
      </form>
    </Card>
  );
};

export default AddressInformation;
