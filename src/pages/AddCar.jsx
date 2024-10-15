// import { useNavigate } from "react-router-dom";
import Typography  from "@mui/material/Typography"
import CarForm from "../components/forms/CarForm"
import useCars from "../components/contexts/Cars/useCars.hook";


export default function AddCar() {
    // const navigate = useNavigate();

  const { addCar } = useCars();

  const submitHandler = (data) => {
    addCar(data);
    // navigate("/");
  };

  return (
    <>
      <Typography variant="h3" component="h2" gutterBottom>
        Add Car
      </Typography>
      <CarForm submitHandler={submitHandler} />
    </>
  )
}
