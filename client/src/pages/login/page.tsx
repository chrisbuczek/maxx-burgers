import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";
import Button from "@mui/material/Button";

const Metadata = () => (
  <>
    <title>Login | Maxx Burgers</title>
    <meta name="description" content="Login to Maxx Burgers" />
  </>
);

type FormValues = {
  email: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <>
      <Metadata />
      <SecondNavbar />
      <div className="p-6">
        <div className="py-6 font-bold">Please fill in</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email", { required: true })}
            id="filled-email"
            label="E-mail address"
            variant="filled"
            error={!!errors.email}
            helperText={errors.email && "This fiels is required"}
            sx={{
              "& .MuiInputLabel-root": {
                color: "red",
                transform: "translate(12px, 16px) scale(1)",
                transformOrigin: "top left",
                transition: "transform 0.3s ease, color 0.3s ease",
                "&.Mui-focused": {
                  color: "gray",
                  transform: "translate(4px, -18px) scale(0.75)",
                },
                "&.MuiFormLabel-filled": {
                  transform: "translate(4px, -18px) scale(0.75)",
                },
              },
              "& .MuiFilledInput-root": {
                "&:before": {
                  borderBottom: "none",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "&:after": {
                  borderBottom: "2px solid gray",
                },
              },
            }}
          />
          <Button type="submit">submit</Button>
        </form>
      </div>
    </>
  );
};

export default Page;
