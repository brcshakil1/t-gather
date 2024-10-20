import profile from "@/assets/profile.jpg";
import verifiedIcon from "@/assets/verified-icon2png.png";
import { EllipsisVertical } from "lucide-react";
import img2 from "@/assets/images/image2.jpg";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Posts = () => {
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setDisIsLike] = useState(false);
  const [isSave, setIsSave] = useState(false);

  return (
    <>
      <div className="my-10">
        {/* part-1 */}
        <div className="flex items-center justify-between ">
          {/* post owner profile */}
          <Link to="/profile">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={profile}
                alt="Profile"
                className="h-[40px] w-[40px] rounded-full object-cover border-2 cursor-pointer"
              />
              <div className="flex items-center gap-1 ">
                <p className="font-semibold text-gray-400">
                  Bayazidur Rahman Chowhdury
                </p>
                {/* if post owner is verified user */}
                <img
                  src={verifiedIcon}
                  className="w-5 mt-1"
                  alt="verified icon"
                />
              </div>
            </div>
          </Link>
          <EllipsisVertical
            size={20}
            className="text-gray-400 cursor-pointer"
          />
        </div>

        {/* part-2 */}
        <div className="space-y-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aliquam labore eos dolorum, tempore quibusdam sed, distinctio
            consequuntur dolorem exercitationem, minus nisi nulla at quasi!
            Fugit adipisci impedit, maxime neque illo tenetur nobis quasi
            numquam fugiat veritatis quas quia ex minima veniam quo odio nemo
            facilis omnis enim et? Ipsa odit minima nihil. Dolorum, sequi. Unde
            vel fugit illum dolor. Placeat rem earum, exercitationem mollitia
            nesciunt cumque maxime quisquam eligendi nisi eum fuga cupiditate
            consectetur nobis ratione sit, repellat natus architecto sed ipsa
            alias sequi dolor optio. Sed iure labore optio adipisci at
            dignissimos repudiandae sapiente ducimus esse, a expedita?
          </p>
          <img
            src={img2}
            alt=""
            className="w-full h-[450px] object-contain rounded-lgg"
          />
        </div>

        {/* part-3 */}
        <div className="flex justify-between mt-5">
          {/* like */}
          <div className="flex items-center gap-1">
            {isLike ? (
              <BiSolidLike
                onClick={() => setIsLike(false)}
                className="text-xl text-blue-500 cursor-pointer"
              />
            ) : (
              <BiLike
                onClick={() => setIsLike(true)}
                className="text-xl cursor-pointer"
              />
            )}

            <p>{isLike ? 1 : 0}</p>
          </div>

          {/* dislike */}
          <div className="flex items-center gap-1">
            {!isDisLike ? (
              <BiDislike
                onClick={() => setDisIsLike(true)}
                className="text-xl cursor-pointer"
              />
            ) : (
              <BiSolidDislike
                onClick={() => setDisIsLike(false)}
                className="text-xl text-blue-500 cursor-pointer"
              />
            )}

            <p>{isDisLike ? 1 : 0}</p>
          </div>

          {/* comment */}
          <FaRegComment className="text-xl" />

          {/* bookmark */}
          <div
            className="cursor-pointer"
            onClick={() => setIsSave((prev) => !prev)}
          >
            {isSave ? (
              <BsBookmarkFill className="text-xl text-blue-500 " />
            ) : (
              <BsBookmark className="text-xl" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
