import YogaPanda from "../assets/yoga_panda.png";
import Play from "../assets/play_button.png";

const Header = ({ user }: { user: string }) => {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div className="flex gap-5">
        <div>
          <img
            src={YogaPanda}
            alt="pratham"
            className="h-[50px] w-[50px] rounded-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-poppins">Hello Pratham, </h2>
          <span className="font-poppins">Ready to do yoga?</span>
        </div>

      
      </div>
      <div>
        <button className="flex items-center gap-4 text-gray-800 bg-lime-500 px-5 py-2 rounded-lg">
          <span>Start Yoga</span>
          <img src={Play} alt="play-btn" className="w-[20px] h-[20px]"/>
        </button>
      </div>
    </div>
  );
};

export default Header;
