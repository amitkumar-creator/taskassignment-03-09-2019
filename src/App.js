import React from 'react';
import {EMP} from './Data';
import Modal from "react-modal";
import EditItem from './EditItem';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      EmpData:EMP,
      isEdit:false,
      select:"",
      isOpenModal:false,
      search:"",
      itemSearchData:"",
      taskName:""
    }
  }
  componentDidMount(){
    this.setState({
       EmpData:EMP
    })
  }
  handleAddItem =()=>{
     this.setState({
       isOpenModal:true
     })
  }
  handleChnageSelect=(e)=>{
      this.setState({
        select:e.target.value
      })
  }
  handleEdit = (itemdata) =>{
       this.setState({
         isEdit:true
       })
  }
  handleClose = () =>{
    this.setState({
      isOpenModal:false
    })
  }
  handleDelete = (data) =>{
    const EmpData = this.state.EmpData.filter(i=>i.id !==data.id)
    this.setState({EmpData})
    //  let orignalEmpData = [...this.state.EmpData]
    //   orignalEmpData = orignalEmpData.filter(item=>item.id ===data)
    //   this.setState({
    //     orignalEmpData,
    //   })
      // orignalEmpData.splice(item,1)
      // this.setState({
      //   EmpDAta:orignalEmpData
      // })
  }
  handleSearch=(e)=>{
     this.setState({
       search:e.target.value
     })
  }
  handleSubmitSearch =(e,name) =>{
      e.preventDefault()
      let itemSearchData = this.state.EmpData;
      if(this.state.Name === 'name'){
        itemSearchData = itemSearchData.filter((item) => item.name.toLowerCase() === this.state.search.toLowerCase());
      }
      if(!this.state.search){
        itemSearchData = this.state.EmpData;
      }
      this.setState([
        itemSearchData,
      ].sort((a, b) => a.id - b.id));
  }
  render(){
    const {isEdit} = this.state
    return (
      <div className="container">
        <button className="btn-primary"
           onClick={this.handleAddItem}
          >Add Field</button>
         <form onSubmit={()=>this.handleSubmitSearch("name", this.state.search)}>
           <input type="text" placeholder="serch by name" 
             onChange={this.handleSearch} autoComplete="off"
             name="search"
             value={this.state.search}
           />
           <button onClick={this.handleSubmitSearch}>Search</button>
         </form>
        <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox"
                        onChange={this.handleChnageSelect}
                       />
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Age</th>
                    <th scope="col">Experiance</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                  {
                    this.state.EmpData.map((item,i)=>{
                      return(
                        <tbody key={i}>
                        {
                          isEdit ? <form>
                            <input type="text" defaultValue={item.name} />
                            <button type="submit">update</button>
                          </form>
                          :
                          <tr>
                            <td>
                              <input type="checkbox"
                                  onChange={this.handleChnageSelect}
                                />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.salary}</td>
                            <td>{item.age}</td>
                            <td>{item.exp}</td>
                            <td>
                                <button onClick={()=>this.handleEdit(item)}>Edit</button>
                                <button onClick={()=>this.handleDelete(item)}>delete</button>
                            </td>
                          </tr>
                         }
                        </tbody>
                      )
                    })
                  }
          </table>
          <EditItem show={this.state.isOpenModal} />
            <div>
          </div>
      </div>
  );
  }
}
  
export default App;
