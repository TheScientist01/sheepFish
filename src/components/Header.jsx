import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black shadow-card-200">
      <div className="w-[90%] mx-auto flex justify-between">
        <img
          src="https://sheep.fish/wp-content/themes/sheepfish1.1/images/logo-white.svg"
          alt="SheepFish"
          className="w-[70px]"
        />
        <div className="flex gap-9 my-auto text-white text-lg">
          <div
            onClick={() => {
              navigate("/home");
            }}
            className="cursor-pointer hover:text-purple-400 duration-500"
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate("/products");
            }}
            className="cursor-pointer hover:text-purple-400 duration-500"
          >
            Products
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
