import {Component} from 'react';
import shop from './shopping-bag.png';
import React from 'react';

export class GroceryList extends Component {
constructor(props){
    super(props);
    this.state={
        date:new Date().toLocaleString(),
        userInput:'',
        groceryList:[]
        
        };
}


componentDidMount(){
    this.getDate();
}

getDate = () => {
    let date = new Date().toDateString();
    this.setState({date});
};

onChangeEvent(e){
 this.setState({userInput:e})
 
}


addItem(item) {
    if(item===''){
        alert('Please enter an item')
    }
else{  
let listArray=this.state.groceryList;
listArray.push(item);
this.setState({groceryList:listArray,userInput:''})
}
}

deleteItem() {
    let listArray=this.state.groceryList;
    listArray=[] ;
    this.setState({groceryList:listArray})
}

crosseWord(event){
    const li=event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
e.preventDefault();
}

render() {
    
    
    
    return(




<div className='container'>

<div className='date'>
    <p>{this.state.date}</p>
</div>

<form onSubmit={this.onFormSubmit}>

<div className='inputs'>

<div>
<input type='text' placeholder='Write something...' onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
</div>

<div>
    <button onClick={() => this.addItem(this.state.userInput)} className='add'>Add</button>
</div>


</div>



<div  className='todo'>
<ul>
    {this.state.groceryList.map((item,index) => (
        <li onClick={this.crosseWord} key={index}>
            <img src={shop} width='40px' alt='shop'/>
            {item}</li>
    ))}
</ul>
</div>

<div className='btn-del'>
    <button onClick={() => this.deleteItem()} className='delete'>Delete</button>
</div>

</form>


</div>

)

}



}
