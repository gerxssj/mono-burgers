function CategoryTabs() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-[88px] z-40 bg-zinc-950 py-4">

      <div className="flex justify-center gap-4">

        <button
          onClick={() => scrollTo("hamburguesas")}
          className="bg-zinc-800 hover:bg-yellow-400 hover:text-black transition px-6 py-3 rounded-full font-bold"
        >
          🍔 Hamburguesas
        </button>

        <button
          onClick={() => scrollTo("otros")}
          className="bg-zinc-800 hover:bg-yellow-400 hover:text-black transition px-6 py-3 rounded-full font-bold"
        >
          🍟 Otros
        </button>

        <button
          onClick={() => scrollTo("bebidas")}
          className="bg-zinc-800 hover:bg-yellow-400 hover:text-black transition px-6 py-3 rounded-full font-bold"
        >
          🥤 Bebidas
        </button>

      </div>

    </div>
  );
}

export default CategoryTabs;