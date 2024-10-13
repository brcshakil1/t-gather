import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const onFormSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen grid grid-cols-2 place-items-center">
      <div className="w-[40vw]">
        <h1 className="text-7xl font-semibold">T-Gather</h1>
      </div>

      {/* form part */}
      <div className="w-[40vw]">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <h2 className="mb-3">Login</h2>
          <div className="space-y-5 my-5">
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <Button className="w-full rounded-full">Login</Button>
        </form>
        <div>
          <h2>Do you have an account?</h2>
          <Link to={"/login"}>
            <Button className="w-full rounded-full">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
