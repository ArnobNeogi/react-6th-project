import React from 'react';
import {Card, Col, Row } from 'react-bootstrap';

const News = (props) => {
    const{title,descriptionh,urlToImage}=props.news;

return(

<Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {descriptionh}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>





     
       
    );
}

export default News;