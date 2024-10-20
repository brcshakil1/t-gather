import SideBar from "@/components/shared/SideBar";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 ">
        <div className="hidden md:block lg:col-span-2 md:col-span-3  pr-5  relative h-screen ">
          <div className="fixed top-0  h-full border-r pr-12 py-10">
            <SideBar />
          </div>
        </div>

        <div className="lg:col-span-7 md:col-span-9 col-span-12  mt-10 px-5">
          <Outlet />
        </div>

        <div className="col-span-3 hidden lg:block border-l-2">
          <h2 className="text-xl font-bold">Secondary side bar</h2>
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
