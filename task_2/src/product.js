import React,{useState} from 'react'
import ReactDOM from 'react-dom';


 function Product() {

    const [data,setData] = useState([]);

    const getUser = () => {
   fetch("https://reqres.in/api/users?page=1")
   .then((response)=> response.json())
   .then((json) => {
    console.log(json);
    setData(json);
   });
    };

    return (
       <div>
           <h1>Hello there</h1>

           <button onClick={getUser}>Get Users.</button>
         <br />
         {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
       
      
           <ul>
               {data.map((item) =>(
                   <li key={item.id}>{item.first_name}</li>,
                   <li key={item.last_name}>{item.last_name}</li>
               ))}
           </ul>
       </div>
    );
}

export default Product;
