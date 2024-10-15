import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CarForm from "../components/forms/CarForm";
import useCars from "../components/contexts/Cars/useCars.hook";

function UpdateCar() {
  const { id } = useParams();
  console.log(id);

 
  const submitHandler = undefined;
  const car = undefined;
  
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Update Car
      </Typography>
      <CarForm car={car} submitHandler={updateCar} />
    </>
  );
}

export default UpdateCar;