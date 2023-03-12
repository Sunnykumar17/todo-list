import React, { useState } from "react";
import TodoList from "./TodoList";

const App =()=>{

  const [inputList,setInputList] = useState("");
  const [items,setItems]=useState([]);

  const ItemEvent =(event)=>{
    setInputList(event.target.value);
  }
  const ListOfItems=()=>{
    setItems((olditems)=>{
      return [...olditems,inputList];
    });
    setInputList("");
  };
  const DeleteItems =(id)=>{
    console.log("deletd");
    setItems((olditems)=>{
      return olditems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  }
  return(
    <>
      <div className="Main_div">
        <div className="Center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text"placeholder="Add a Items" onChange={ItemEvent} value={inputList} />
          <br />
          <button className="btn" onClick={ListOfItems}>+</button>

          <ol>
          {items.map((element,index)=>{
            return <TodoList key={index} id={index} text={element} onSelect={DeleteItems}/>
          })}
          
          </ol>
        </div>
      </div>
    </>
  )
}
export default App;