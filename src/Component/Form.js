import { useEffect, useState } from "react";
import List from "./List";

function Form(){
    const [student,setStudent] = useState([{name:'ads',city:'asd'}]);
    
     async function add(){
        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;

        await fetch('http://localhost:9000/student',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({name,city}),
        })

        getData()

    }

   

    async function getData(){
        const res = await fetch('http://localhost:9000/student');
        const data = await res.json();

        const temp = data.map((e)=>{

            const obj = {
                name:e.name,
                city:e.city
            }
            return obj;
        })

        setStudent(temp);
    }


    useEffect(()=>{

        getData();

    },[])



    return(<>
    
        <input type={'text'} id='name' />
        <input type={'text'} id='city' />
        <button onClick={add}>Add</button>
        <List student={student}/>
    
    </>)

}

export default Form;