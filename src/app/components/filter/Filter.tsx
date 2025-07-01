"use client";
import { useState } from "react";

import "./filter.css";

import Image from "next/image";
import { filterData } from "@/app/data";
// import Image from "next/image";

const categories = ["all", "Completed", "Ongoing", "Design"];

const Filter = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? filterData
      : filterData.filter((item) => item.category === filter);
  return (
    <section className="portfolio">
      <div className="container">
        <ul className="filterMenu">
          {categories.map((cat) => (
            <li
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </li>
          ))}
        </ul>
        <div className="grid">
          {filteredItems.map((item) => (
            <div className="gridItem fade-in" key={item.id}>
              <Image src={item.image} alt={item.title} width={550} height={500}/>
              <h4>{item.title}</h4>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Filter;
