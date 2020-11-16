import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = props => {
  const monsters = props.monsters.map(m => <Card key={m.id} monster={m} />);

  return <div className="card-list">{monsters}</div>;
};
