import CreatePost from "./CreatePost/CreatePost";
import Posts from "@/components/shared/Posts/Posts";

const Home = () => {
  return (
    <div>
      <CreatePost />
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Home;
