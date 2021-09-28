import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup,Button, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './Component/News/News';


function App() {
// const c=[];
// const number=c.length===0 ? 5: 10;
  
  const [news,setNews]=useState([]);
  useEffect(()=>{

    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=18180fe9f4924da3965c7850c4bbb2cb')
    .then(res=>res.json())
    .then(data=>setNews(data.articles))
  },[])
  return (
    <div className="App">
          {
            news.length===0 ?
            <Spinner animation="grow" />
            :
            <Row xs={1} md={3} className="g-4">
     {
      news.map(nw=><News news={nw}></News>)

     }
 </Row>

          }
      
    </div>
  );
}

export default App;
