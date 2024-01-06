import Hero from "../components/Hero";

const Home = () => {
  return (
    <main className="flex justify-between items-center max-w-[1200px] mx-auto ">
      <section className="mx-auto py-[40px] md:py-[80px]">
        <Hero />
      </section>
    </main>
  );
};

export default Home;
