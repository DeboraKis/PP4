/* eslint-disable react/prop-types, no-unused-vars */
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui";
import FormRow from "./FormRow";


let handleSubmit = (fn) => fn;
let control = {};
let reset = () => {};
let isDirty = false;
let isSubmitting = false; 
let isValid = true; 






function CarForm({ car, submitHandler = (data) => console.log(data) })
 {
  
  return (
    <FormContainer
      defaultValues={car || defaultValues}
      onSuccess={handleSubmit(submitHandlerWithReset)}
    >
      <FormRow>
        <TextFieldElement
          control={control}
          fullWidth
          name="name"
          label="Name"
          required
        />
      </FormRow>

      <FormRow>
        <TextFieldElement
          control={control}
          fullWidth
          name="bhp"
          label="BHP"
          required
        />
      </FormRow>

      <FormRow>
        <TextFieldElement
          control={control}
          fullWidth
          name="avatar_url"
          label="Avatar URL"
        />
      </FormRow>

      <FormRow halign="end">
        <Button
          type="reset"
          onClick={() => reset()}
          variant="contained"
          disabled={!isDirty}
        >
          Reset
        </Button>
        <Button
          type="submit"
          primary="true"
          variant="contained"
          disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
        >
          Submit
        </Button>
      </FormRow>
    </FormContainer>
  );
}

export default CarForm;
