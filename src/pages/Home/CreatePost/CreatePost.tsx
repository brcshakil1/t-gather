/* eslint-disable @typescript-eslint/no-explicit-any */
import profile from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { Laugh } from "lucide-react";
import { useForm } from "react-hook-form";
import PostCategoryDropdown from "./PostCategoryDropdown/PostCategoryDropdown";

// type TPostData = {
//   description: string;
//   image: File;
// };

const CreatePost = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onPostSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="border-b py-4">
      <form onSubmit={handleSubmit(onPostSubmit)}>
        <div className="flex gap-2">
          <img
            src={profile}
            alt="Profile"
            className="h-[40px] w-[40px] rounded-full object-cover border-2 cursor-pointer"
          />
          <div className="w-full flex flex-col space-y-5">
            <Textarea
              placeholder="Write your travel tips!"
              className="resize-none text-xl font-semibold border"
              {...register("description", { required: true })}
            />
            <div className="grid items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between  gap-5">
                <div className="flex items-center gap-5">
                  <Input
                    id="picture"
                    type="file"
                    {...register("image")}
                    className=""
                  />
                  <PostCategoryDropdown setValue={setValue} />
                  {/* <Laugh className="cursor-pointer" /> */}
                </div>
                <Button className="text-gray-200 px-8 w-full md:w-auto text-lg font-semibold rounded-full bg-blue-500 hover:bg-blue-400">
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
