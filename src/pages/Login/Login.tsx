import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginUserMutation } from "@/redux/apis/baseApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const [login, { isLoading, data }] = useLoginUserMutation();

  const onFormSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const res = await login(data);

    console.log(res);
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  console.log(data);
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
              {...register("email", { required: true })}
            />
            <Input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <Button className="w-full rounded-full">Login</Button>
        </form>
        <div className="mt-5">
          <h2 className="mb-5 font-semibold">Don't you have an account?</h2>
          <Link to={"/register"}>
            <Button className="w-full rounded-full">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
