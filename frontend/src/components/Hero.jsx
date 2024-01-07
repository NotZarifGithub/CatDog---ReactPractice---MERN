import Button from "./Button";

const Hero = () => {
  return (
    <section className="p-[20px]  max-w-[1000px] ">
      <section className="border flex flex-col  gap-6 text-center border-black rounded-3xl md:rounded-[100px] p-[30px] md:p-[60px] lg:p-[90px] shadow-xl drop-shadow-2xl">
        <div className="hidden md:flex text-3xl font-semibold md:text-5xl md:font-bold lg:text-6xl lg:font-black">
          A place where you can find a list of information on cats and dogs
          breed.
        </div>
        <div className="md:hidden text-3xl font-semibold md:text-5xl md:font-bold lg:text-6xl lg:font-black">
          Explore comprehensive information on cat and dog breeds.
        </div>

        <div className="md:text-lg lg:text-xl">
          Explore a list of cat and dog breeds, providing essential information
          at your fingertips. Find your perfect furry match with ease,
          discovering key traits and care insights in a streamlined format.
        </div>
        <div className="">
          <Button />
        </div>
      </section>
    </section>
  );
};

export default Hero;
