"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NotFound from "../not-found";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import Link from "next/link";
import Header from "@/Components/Header";

const HomeId = () => {
  const pathName = usePathname();
  const router = useRouter();

  const id = pathName.slice(1, pathName.length);

  const [data, setdata] = useState([]);
  const [img, setimg] = useState(true);

  const fetchData = async () => {
    const Base_ULR = "https://restcountries.com/v3.1";

    const countrys = "all";

    const responsive = await fetch(`${Base_ULR}/${countrys}`);
    const result = await responsive.json();
    setdata(result);
  };
  // const filteredData = data.filter((item: { population: string }) => {
  //   item.population == id ? <IdPages /> : <NotFound />;
  // });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = data
    ? data.filter((item: { population: string }) => {
        if (item.population == id) {
          return item;
        }
      })
    : [];

  interface CountrysType {
    flags: { png: string; alt: string };
    name: { common: string; official: string };
    region: string;
    population: string;
    capital: string;
    cca3: string;
    independent: string;
    landlocked: string;
    status: string;
    startOfWeek: string;
    subregion: string;
    timezones: string;
  }

  const handleImages = () => {
    if (img == true) {
      setimg(false);
    } else if (img == false) {
      setimg(true);
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="w-11/12 mx-auto mt-10">
        {filteredData.map((item: CountrysType, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center sm:flex-row"
          >
            <button onClick={handleImages}>
              <Avatar
                className={`${
                  img ? "w-96 h-64" : "absolute w-screen h-screen top-0 left-0"
                } hover:shadow-xl rounded-xl cursor-pointer hover:scale-105 active:scale-95`}
              >
                <AvatarImage src={item.flags.png} alt={item.flags.alt} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
            <div className="mt-5 sm:ml-10">
              <h1 className="text-3xl font-medium">{item.name.common}</h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">Region:</span> {item.region}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">Capital:</span> {item.capital}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">Population:</span>{" "}
                {item.population}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">Native name:</span>{" "}
                {item.name.official}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">I:</span> {item.cca3}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">Independent:</span>{" "}
                {item.independent ? "independent" : "not independent"}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">Landlocked:</span>{" "}
                {item.landlocked ? "true" : "false"}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">Timezones:</span>{" "}
                {item.timezones}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">Sub region:</span>{" "}
                {item.subregion}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">startOfWeek:</span>{" "}
                {item.startOfWeek}
              </h1>
              <h1 className="text-xl mt-2">
                <span className="text-gray-500">Status:</span> {item.status}
              </h1>
            </div>
          </div>
        ))}
      </section>
      <div className="w-11/12 mx-auto mt-10">
        <Link href={`/`}>
          <button className="px-5 py-3 text-3xl rounded-lg w-full sm:w-auto bg-cyan-500 text-white hover:scale-105 active:scale-75 transition-all">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeId;
