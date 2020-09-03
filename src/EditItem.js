import React,{useState} from 'react'
import Modal from 'react-modal'

 function EditItem(props) {

    const [state, setstate] = useState({
        Name:"",
        salary:"",
        age:"",
        exp:"",
        updateData:[]
    })
     if(!props.show){
         return null
     }
     const handleChange = (e) =>{
         setstate({[e.target.name]: e.target.value })
         
     }
     const handleSubmit =(e)=>{
       e.preventDefault()
       let updateData = state.updateData
       updateData.push({
        Name:state.Name,
        salary:state.salary,
        age:state.age,
        exp:state.exp,
       })
         setstate({
             Name:state.Name,
             salary:state.salary,
             age:state.age,
             exp:state.exp,
             updateData
         })
         console.log(state.updateData)
     }
    return (
        <div>
             <form onSubmit={handleSubmit}>
            Name:
                <input type="text" 
                    onChange={handleChange}
                    name="Name"
                    value={state.Name}
                />
            Salary:
                <input type="text" 
                    onChange={handleChange}
                    name="salary"
                    value={state.salary}
                />
            Age:
                <input type="text" 
                    onChange={handleChange}
                    name="age"
                    value={state.age}
                />
            Experiance:
                <input type="text" 
                    onChange={handleChange}
                    name="exp"
                    value={state.exp}
                />
            <button type="submit" >Update</button>
            </form>
        </div>
    )
}
export default EditItem