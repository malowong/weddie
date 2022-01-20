import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup
      .string()
      .min(6, "Minimum Length of username should be 6")
      .required(),
    password: yup.string().required(),
  })
  .required();

function FormDemo() {
  const date = useMemo(() => new Date(), []);
  console.log(date);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      <p>{errors.username?.message}</p>

      <input type="password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input type="submit" />
    </form>
  );
}

export default FormDemo;
