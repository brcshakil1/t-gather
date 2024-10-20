import image from "@/assets/profile.jpg";
import verified from "@/assets/verified-icon2png.png";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import CreatePost from "../Home/CreatePost/CreatePost";
import Posts from "@/components/shared/Posts/Posts";

const Profile = () => {
  return (
    <div>
      <div className="border-b border-gray-800 pb-5">
        <div className="relative">
          {/* cover image */}
          <div className="w-full h-[200px] bg-gray-700 rounded-lg">
            {/* <img src="" alt="" className="w-full h-full rounded-lg" /> */}
          </div>

          {/*profile image  */}
          <div className="text-right">
            <div className="absolute bottom-0  lg:-bottom-5 left-3 md:left-5 border-4 border-black rounded-full overflow-hidden">
              <img
                src={image}
                alt=""
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] object-cover"
              />
            </div>

            <Button className="mt-5 bg-transparent text-gray-300 border border-gray-800 rounded-full hover:bg-slate-900">
              Edit profile
            </Button>
          </div>
        </div>
        {/* about */}
        <div>
          <div className="pt-8 flex items-center gap-2 text-gray-300">
            <p className="text-lg font-semibold">Bayazidur Rahman Chowdhury</p>
            <div className="border border-gray-800 rounded-full flex items-center gap-1 px-2 py-.5  cursor-pointer">
              <img src={verified} alt="" className="w-5 h-5" />
              <p>Get verified</p>
            </div>
          </div>
          {/* username */}
          <p className="text-gray-500">brcshakil</p>

          <div className="pt-4">
            {/* bio */}
            <p>
              I am a professional web developer. I am job as a MERN Stack web
              developer. I can immediately join for the role.
            </p>
            {/* location */}
            <p className="flex items-center text-gray-500">
              <MapPin size={20} />
              <span>Moulvibazar, Sylhet, Bangladesh</span>
            </p>
          </div>
          {/* following & followers  */}
          <div className="space-x-5 text-gray-300 mt-4">
            <a href="">
              0 <span className="text-gray-500">Followers</span>
            </a>
            <a href="">
              0 <span className="text-gray-500">Following</span>
            </a>
          </div>
        </div>
      </div>

      {/* posts */}
      <div>
        <CreatePost />
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
