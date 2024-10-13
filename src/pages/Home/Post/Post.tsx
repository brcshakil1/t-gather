import profile from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
const Post = () => {
  const { register, handleSubmit } = useForm();

  const onPostSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="border p-2">
      <form onSubmit={handleSubmit(onPostSubmit)}>
        <div className="flex items-center gap-5">
          <img
            src={profile}
            alt="Profile"
            className="h-[40px] w-[40px] rounded-full object-cover"
          />
          {/* <Input
            type="text"
            placeholder="Write your travel tips!"
            {...register("description", { required: true })}
            className="text-lg font-semibold p-3"
          /> */}
          <Textarea
            placeholder="Write your travel tips!"
            className="resize-none text-xl font-semibold border-0"
            {...register("description", { required: true })}
          />
        </div>
        <Button>Post</Button>
      </form>
    </div>
  );
};

export default Post;
