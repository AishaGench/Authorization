import React from 'react';


class Login extends React.Component {

  constructor(){
    super();
    this.state={authorized: false,
                inputVal:'',
                counter: 3 }

  }

  checkAuthorize=()=>{
    if(this.props.user.password=== this.state.inputVal){
      this.setState({authorized: true}); 
    }else{
      this.setState({counter: this.state.counter -1})
      console.log(this.state.counter)
      alert('Please check your password')
      if(this.state.counter === 1){
        console.log('Opppss!!!')

        this.enableInput()
      }
    }

  }
  enableInput(){
    alert('Try again 30 second')
    setTimeout(() => {
      this.setState({
        counter:3
      })
     }, 3000);
  }


  render() {
    
let login = (
  <div className="card">
        <form className="form-inline" onSubmit={this.checkAuthorize} action='#'>
          <div className="form-group">
            <input type="password" className="form-control mx-sm-3" placeholder="Password" onChange={(e)=> this.setState({inputVal:e.target.value})}/>
            <button type="submit" className="btn btn-primary" disabled={this.state.counter===0 ? true : false}>Submit</button>
          </div>
        </form>
      </div>
);

let contact=(
  <div className="card">
            <div className="top">
                <h2 className="name">{this.props.user.name}</h2>
                <img className="circle-img" src={this.props.user.imgURL} alt=""/>
                
            </div>

            <div className="bottom"></div>
            <p >Mail:{this.props.user.mail}</p>
            <p>Phone:{this.props.user.phone}</p>
            
        </div>
      
  )

return (
  <div id="authorization">
    <h1>{(this.state.authorized === false) ? 'Enter the Password' :'Contact profile'}</h1>
    {this.state.authorized ? contact : login} 
  </div>
)
  }
}


export default Login;