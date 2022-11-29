import './App.css';
import { object } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import {useState} from "react"
function App() {
  const[articles,setArticles]= useState(object.articles)
  const [sum,setSum] = useState(object.sum)
  const increment =(id)=>{
    let newTable = articles.map((elt)=>{
      if(elt.id === id){
        return {...elt,qte: elt.qte+1}
      } else {
        return elt
      }
    });
    setArticles(newTable);
  }
  const decrement =(id)=>{
    let newTable = articles.map((elt)=>{
      if(elt.id === id && elt.qte>0){
        return {...elt,qte: elt.qte-1}
      } else {
        return elt
      }
    });
    setArticles(newTable);
  }
  return (
    <div className="App">
    <List
      articles={articles}
      sum={sum}
      increment={increment}
      decrement={decrement}
    />
    </div>
  );
}

export default App;
