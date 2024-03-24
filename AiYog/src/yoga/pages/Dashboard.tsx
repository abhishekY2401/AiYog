import { useState } from "react";
import Header from "../components/Header";

const Dashboard = () => {
  const [user, setUser] = useState("");
  return (
    <>
      <div>
        <Header user={user} />
      </div>
      <div className="flex flex-col pl-20 pt-20">
        <div className="flex">
            <div className="flex justify-center items-center gap-10 px-10 py-10 bg-lime-600 rounded-lg">
                <h2 className="font-poppins text-3xl">Weekly <br/>Progress</h2>
                <div className="text-2xl font-poppins font-semibold flex justify-center items-center rounded-full w-[100px] h-[100px] bg-white border-red-500">75%</div>
            </div>
            <div className="flex justify-center items-center gap-10 px-10 py-10 bg-lime-600 rounded-lg"></div>
        </div>
        <div className="flex">
            <div></div>
            <div></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
