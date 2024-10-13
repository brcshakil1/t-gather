import {
  ArrowDownToLine,
  CircleEllipsis,
  House,
  PersonStanding,
  Search,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const linkStyle = "text-[22px] flex gap-5 items-center ";
  return (
    <div className="">
      {/* logo */}
      <div>
        <h2 className="text-3xl font-bold mb-8">T-Gather</h2>
      </div>

      {/* side-bar */}
      <div className="grid ">
        <Link to="/" className=" py-3 px-5 rounded-lg hover:bg-slate-950">
          <div className={`${linkStyle} `}>
            <House size={32} />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/" className=" py-3 px-5 rounded-lg hover:bg-slate-950">
          <div className={linkStyle}>
            <Search size={32} />
            <span>Search</span>
          </div>
        </Link>

        <Link to="/" className=" py-3 px-5 rounded-lg hover:bg-slate-950">
          <div className={linkStyle}>
            <Users size={32} />
            <span>Groups</span>
          </div>
        </Link>

        <Link to="/" className=" py-3 px-5 rounded-lg hover:bg-slate-950">
          <div className={linkStyle}>
            <ArrowDownToLine size={32} />
            <span>Saved</span>
          </div>
        </Link>

        <Link to="/" className=" py-3 px-5 rounded-lg hover:bg-slate-950">
          <div className={linkStyle}>
            <PersonStanding size={32} />
            <span>Profile</span>
          </div>
        </Link>

        <Link to="/" className=" py-3 px-5 rounded-lg hover:bg-slate-950">
          <div className={linkStyle}>
            <CircleEllipsis size={32} />
            <span>More</span>
          </div>
        </Link>
      </div>

      <div></div>
    </div>
  );
};

export default SideBar;
