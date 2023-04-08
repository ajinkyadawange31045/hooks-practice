// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// let MainValue = 10

function App() {
  let [MainValue,setMainValue]= useState(0); //initial value ko 0 daal diya. (setMainValue is used to update value of useState.)

  //using array
  const [User,setUser] = useState([1,2,3])


  // using object
  const [obj,setObj] = useState({
    no:1,
    name:"Ajinkya"
  })


  // application project (counter)
  let [counter,setCounter]=useState(0)

  // we will use object to take inputs from form
  let [form,setForm] = useState({
    name : "",
    email : "",
    password:""
  });
  //defining handle function for the same
  const handleSubmit = (e)=>{
      e.preventDefault(); //to avoid the reload of the page.
      alert(JSON.stringify(form))//we cannot alert the object so we convert that to string using json
  }


  return (
    <div className='App'>

      {/*This was for the numerical useState  */}
      {MainValue}<br></br>
      <button onClick={()=>{
        setMainValue((MainValue)=MainValue+1)
       }}>
        click me
      </button><br></br><br></br><br></br><br></br><br></br>

      {/*This was for the array like useState  */}
      Array used to print this <br></br> {User.map((item)=>{ //used map to iterate over the loop
          return <div>{item}</div>
      })}
      <button onClick={()=>{
        setUser([...User,4])//this is used to append the value [...User,2]
       }}>
        click me
      </button><br></br><br></br><br></br><br></br><br></br>


    {/*This was for the objectsuseState  */}
      user's number {obj.no}, 
      with name {obj.name} <br></br>
      <button onClick={()=>{
        setObj({...obj,no:2,name:"Dawange"})
      }}>
        click to change the number in the object
      </button><br></br><br></br><br></br><br></br><br></br>




      {/* Counter application using react */}
       Counter application - {counter}<br></br>
      <button onClick={()=>{setCounter((counter)=counter+1)}}>+</button><br></br>
      <button onClick={()=>{setCounter((counter)=counter-1)}}>-</button><br></br>
      <button onClick={()=>{setCounter(0)}}>Reset</button><br></br><br></br><br></br>



      {/* taking inputs using form */}
      <p> now if we want to send the forms data to backend then, we can directly sent that through the form payload...  let [form,setForm] = useState(...)<br></br>With the help of API, and it will get store in the database </p>
      <form onSubmit={handleSubmit}> 
      {/* we have created a function named handle submit, which will handle the submit request */}
        <input value={form.name} type='text' placeholder='Enter you name' name="name" id = "" onChange={(e)=>setForm(
          {...form,[e.target.name]:e.target.value
        })} />
        <input value={form.email} type='text' placeholder='Enter you email' name="email" id = "" onChange={(e)=>setForm(
          {...form,[e.target.name]:e.target.value //e is for event listener, basically we are replacing the name with value, which will done through state, which is form input
        })} />
        <input value={form.password} type='password' placeholder='Enter you password' name="password" id = "" onChange={(e)=>setForm(
          {...form,[e.target.name]:e.target.value
        })} />
        <input type='submit' value="Submit"/>
      </form>
  </div>
  )
}

export default App;
