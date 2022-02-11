import React from "react";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <div className="homepage">
      <img className="h-32" src="/images/img1.svg" alt="" />
      <h1 className="text-red-400 text-4xl my-2">
        Lorem ipsum dolor sit amet.
      </h1>
      <p className="text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        corporis facere reprehenderit tempore sunt ut doloribus, ex sed aut
        quidem esse! Temporibus ullam nisi inventore ducimus, cum obcaecati?
        Assumenda necessitatibus eaque reiciendis quis error adipisci omnis
        minima hic dolore id.
      </p>
    </div>
  );
}
