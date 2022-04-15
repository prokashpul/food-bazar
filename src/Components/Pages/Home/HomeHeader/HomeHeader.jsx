import React from "react";
import bg from "../../../../Assets/images/bannerbackground.png";

const HomeHeader = () => {
  return (
    <section
      className="md:h-[500px] h-[50vh] w-full bg-orange-100 relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bg}) `,
        backgroundPosition: "center",
        backgroundSize: "110%  100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-5xl text-center">Best food waiting for your belly</h2>
      <form action="">
        <div className="my-10 flex ">
          <input
            className="border-r-0 text-red-600 pl-4 block w-[200px]  h-10 md:w-[300px] outline-red-600 rounded-r-none rounded-3xl"
            type="search"
            name="search"
            id="search"
            placeholder="search"
          />
          <input
            className="bg-red-600 ml-[-20px] border-white duration-500 text-white hover:bg-red-500 cursor-pointer   md:w-28 w-20  rounded-3xl"
            type="submit"
            value="Search"
          />
        </div>
      </form>
    </section>
  );
};

export default HomeHeader;
