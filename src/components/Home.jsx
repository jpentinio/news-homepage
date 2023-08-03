import React from "react";

const items = [
  {
    id: "01",
    image: "bg-image-1",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: "02",
    image: "bg-image-3",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets",
  },
  {
    id: "03",
    image: "bg-image-2",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities",
  },
];

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-8 gap-8 my-16">
      <div className="col-span-3 xl:col-span-2 grid grid-rows-1 gap-8">
        <div className="bg-desktop-image bg-cover h-64 xl:h-auto" />
        <div className="grid xl:grid-cols-2 gap-8">
          <div className="text-5xl xl:text-6xl font-bold">
            The Bright Future of Web 3.0?
          </div>
          <div className="grid grid-rows-1 gap-8">
            <div>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </div>
            <button className="w-fit px-10 py-3 bg-soft-red text-off-white tracking-widest hover:bg-very-dark-blue">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-3 xl:col-span-1 bg-very-dark-blue p-6 xl:p-8 text-off-white">
        <div className="text-soft-orange text-5xl font-semibold">New</div>
        <div className="grid grid-cols-1 divide-y">
          <div className="cursor-pointer group py-8 flex flex-col gap-2">
            <div className="text-xl font-semibold group-hover:text-soft-orange">
              Hydrogen VS Electric Cars
            </div>
            <div className="font-light">
              Will hydrogen-fueled cars ever catch up to EVs?
            </div>
          </div>
          <div className="cursor-pointer group py-8 flex flex-col gap-2">
            <div className="text-xl font-semibold group-hover:text-soft-orange">
              The Downsides of AI Artistry
            </div>
            <div className="font-light">
              What are the possible adverse effects of on-demand AI image
              generation?
            </div>
          </div>
          <div className="cursor-pointer group py-8 flex flex-col gap-2">
            <div className="text-xl font-semibold group-hover:text-soft-orange">
              Is VC Funding Drying Up?
            </div>
            <div className="font-light">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-1 xl:grid-cols-3 gap-8 mt-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer group grid grid-cols-3 gap-4 xl:gap-8"
          >
            <div className={`${item.image} bg-cover`} />
            <div className="col-span-2 grid grid-row-1 gap-4">
              <div className="text-4xl font-bold text-grayish-blue">
                {item.id}
              </div>
              <div className="text-xl font-extrabold group-hover:text-soft-red">
                {item.title}
              </div>
              <div>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
