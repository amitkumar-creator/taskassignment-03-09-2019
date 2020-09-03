import React,{useState} from 'react'

export default function AddItem() {

    const [state, setstate] = useState({
        Name:"",
        salary:"",
        age:"",
        exp:"",
    })

    const handleChange = (e) =>{
        setstate({
              [e.target.name]: e.target.value
        })
        console.log(state.name)
    }

    return (
        <div>
            <form>
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
            </form>
        </div>
    )
}
