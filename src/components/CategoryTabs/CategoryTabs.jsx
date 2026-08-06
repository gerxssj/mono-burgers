function CategoryTabs() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-[88px] z-40 bg-zinc-950 border-b border-zinc-800">

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          py-4
          overflow-x-auto
          scrollbar-hide
        "
      >

        <div className="flex gap-3 w-max mx-auto">

          <button
            onClick={() => scrollTo("hamburguesas")}
            className="
              whitespace-nowrap
              bg-zinc-800
              hover:bg-yellow-400
              hover:text-black
              transition
              px-5
              py-3
              rounded-full
              font-bold
              text-sm
              sm:text-base
            "
          >
            🍔 Hamburguesas
          </button>

          <button
            onClick={() => scrollTo("otros")}
            className="
              whitespace-nowrap
              bg-zinc-800
              hover:bg-yellow-400
              hover:text-black
              transition
              px-5
              py-3
              rounded-full
              font-bold
              text-sm
              sm:text-base
            "
          >
            🍟 Otros
          </button>

          <button
            onClick={() => scrollTo("bebidas")}
            className="
              whitespace-nowrap
              bg-zinc-800
              hover:bg-yellow-400
              hover:text-black
              transition
              px-5
              py-3
              rounded-full
              font-bold
              text-sm
              sm:text-base
            "
          >
            🥤 Bebidas
          </button>

        </div>

      </div>

    </div>
  );
}

export default CategoryTabs;