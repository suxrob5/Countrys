"use client";

import Header from "@/Components/Header";
import Main from "@/Components/Main";
import Search from "@/Components/Search";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setdata] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const fetchData = async () => {
    const Base_ULR = "https://restcountries.com/v3.1";

    const countrys = "all";

    const responsive = await fetch(`${Base_ULR}/${countrys}`);
    const result = await responsive.json();
    setdata(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  interface CountrysType {
    flags: { png: string; alt: string };
    name: { common: string };
    region: string;
    population: string;
    capital: string;
  }

  const dataMapCountrys = data.map((item: CountrysType) => item);

  const filteredData = dataMapCountrys.filter((item) => {
    const result =
      item.region.toLowerCase().includes(inputValue.toLowerCase()) ||
      String(item.capital).toLowerCase().includes(inputValue.toLowerCase()) ||
      item.name.common.toLowerCase().includes(inputValue.toLowerCase());
    return result;
  });

  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <Search inputValue={inputValue} setinputValue={setinputValue} />
      </div>
      <main className="w-[90%] mx-auto mt-[100px]">
        <Main filteredData={filteredData} />
      </main>
    </div>
  );
};

export default Home;
