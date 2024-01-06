import Button from "./Button";

const Hero = () => {
  return (
    <section className="p-[20px]  max-w-[1000px] ">
      <section className="border flex flex-col  gap-6 text-center border-black rounded-3xl md:rounded-[100px] p-[30px] md:p-[60px] lg:p-[90px] shadow-xl drop-shadow-xl">
        <div className="text-3xl font-semibold md:text-5xl md:font-bold lg:text-6xl lg:font-black">
          A place where you can find a list full of information on cats and dogs
          breed.
        </div>

        <div className="md:text-lg lg:text-xl">
          Explore a curated list of cat and dog breeds, providing essential
          information at your fingertips. Find your perfect furry match with
          ease, discovering key traits and care insights in a streamlined
          format.
        </div>

        <div className="">
          <Button />
        </div>
      </section>
    </section>
  );
};

export default Hero;
