import Header from "../../components/Header";
import Box from "../../components/Box";
import mobile from "../../assets/mobile.png";
import shop from "../../assets/shop.png";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div className="mx-auto">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[200px] gap-y-9 w-[90%] mx-auto mt-9">
        <div className="my-auto mx-auto md:ml-auto w-[400px]">
          <div className="font-bold text-lg text-transparent w-[250px] bg-clip-text bg-gradient-to-r from-purple-800 via-blue-400 to-pink-600">
            *Get more than 50% discount
          </div>
          <div className="text-[50px] font-extrabold leading-[70px]">
            The world's best shopping app
          </div>
          <div className="text-gray-400 mt-5 text-lg">
            Discover endless possibilities for your style and home with our
            curated collection and unbeatable prices.
          </div>
        </div>
        <div className="flex mx-auto rounded-[50px] w-[450px] h-[600px] bg-gradient-to-tr from-purple-900 via-blue-400 to-pink-600">
          <img
            src={shop}
            alt="Mobile"
            className="w-[250px] h-[400px] mx-auto my-auto"
          />
        </div>
      </div>
      <div className="pt-[130px] text-center">
        <div className="font-bold text-[50px]">Why choose us?</div>
        <div className="text-gray-400 w-[400px] mx-auto my-3">
          Choose us for unrivaled convenience, exceptional quality, unbeatable
          value, and outstanding customer service. Shop with confidence!
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] py-[50px] w-[80%] mx-auto">
        <Box
          label="Security by Default"
          text="Enable privacy mode and app locking to protect your data"
          image={mobile}
        />
        <Box
          label="Security by Default"
          text="Enable privacy mode and app locking to protect your data"
          image={mobile}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[200px] gap-y-9 w-[90%] mx-auto">
        <div className="flex justify-center mx-auto md:ml-auto w-[500px] h-[600px]">
          <img
            src={shop}
            alt="Mobile"
            className="w-[250px] h-[400px] mx-auto my-auto"
          />
        </div>
        <div className="my-auto mx-auto md:mr-auto w-[400px]">
          <div className="font-bold text-lg text-transparent w-[250px] bg-clip-text bg-gradient-to-r from-purple-800 via-blue-400 to-pink-600">
            *Get more than 50% discount
          </div>
          <div className="text-[50px] font-extrabold leading-[70px]">
            The world's best shopping app
          </div>
          <div className="text-gray-400 mt-5 text-lg">
            Elevate your shopping experience with us. Unleash the power of
            convenience, quality, and savings.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
