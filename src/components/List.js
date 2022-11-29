import React from "react";
import { object } from "./../data";
import CardItems from "./CardItems";

function List({ articles,sum,increment,decrement }) {
  return (
    <div>
      <div>
        {articles.map((elt) => (
          <CardItems key={elt.id} article= {elt} increment={increment} decrement={decrement} 

          />
        ))}
      </div>
      <hr/>
      <h1>sum:{sum}</h1>
    </div>
  );
}

export default List;
