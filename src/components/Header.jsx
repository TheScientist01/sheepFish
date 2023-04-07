import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black shadow-card-200">
      <div className="w-[90%] mx-auto flex justify-between">
        <img
          src="https://sheep.fish/wp-content/themes/sheepfish1.1/images/logo-white.svg"
          // src="https://s.dou.ua/CACHE/images/img/static/companies/header-logo-hover123142/b4d7a0be6bc9725ef3dfe76e1fd4dc42.png"
          alt="SheepFish"
          className="w-[70px] h-[70px]"
        />
        <div className="flex gap-9 my-auto text-white">
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
