import axios from 'axios'
import React, { Component } from 'react'

export default class Basic  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          id:'',
          name:'',
          author:'',
          post:''
      }
    }
    changeHandler=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    
    }
    formHandler=(event)=>
    {
axios.posts('http://localhost:4000',this.state)
.then(response=>
    {
console.log('data inserted right')
 })
 .catch(error=>{
    console.log('error')
    
 }
 )

    }
  render() {
      const{id,name,author}=this.state
    return (
      <div>
      <form onChange={this.formHandler}>
<input type="text" name="id" value="{id}" onChange={this.changeHandler}/>
<input type="text" name="name" value="{name}" onChange={this.changeHandler}/>
<input type="text" name="author" value="{author}" onChange={this.changeHandler}/>
<input type="submit" value="submit"/>
      </form>
      
       </div>
    )
  }
}
z