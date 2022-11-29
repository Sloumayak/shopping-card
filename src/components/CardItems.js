import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItems({article,increment,decrement}) {
    const handleIncrement =()=>{
        increment(article.id);
    }
    const handleDecrement =()=>{
        decrement(article.id)
    }
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={article.Image} />
        <Card.Body>
          <Card.Title>{article.name}</Card.Title>
          <Card.Text>
            {article.price}$
          </Card.Text>
          <Button variant="danger"onClick={handleDecrement} >-</Button>
          <span style={{fontSize:"25px"}}>{article.qte} </span>
          <Button variant="primary" onClick={handleIncrement}>+</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItems;
