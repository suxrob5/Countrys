"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

interface CountrysType {
  flags: { png: string; alt: string };
  name: { common: string };
  region: string;
  population: string;
  capital: string;
}

type MainType = {
  filteredData: CountrysType[];
};

const Main: React.FC<MainType> = ({ filteredData }) => {
  interface CountrysType {
    flags: { png: string; alt: string };
    name: { common: string };
    region: string;
    population: string;
    capital: string;
  }

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredData.map((item: CountrysType, i) => (
          <Link key={i} href={`${item.population}`}>
            <div className="cursor-pointer active:scale-95 border hover:shadow-2xl shadow-md p-5 rounded-xl hover:scale-105 transition-all">
              <div>
                <Avatar className="w-full h-[170px] sm:h-[200px] md:h-[270px] shadow">
                  <AvatarImage src={item.flags.png} alt={item.flags.alt} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-3xl font-semibold mt-10">
                  {item.name.common}
                </h1>
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
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Main;
