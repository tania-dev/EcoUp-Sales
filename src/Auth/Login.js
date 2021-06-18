import React from "react";
import style from './Login.module.css';
import { Button } from 'react-bootstrap';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error:false,
      loading: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  //bind textbox values in state
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  login = () => {
    this.setState({ loading: true });
    const username = this.state.username;
    const password = this.state.password;
    if(username==="admin" && password==="routeOPT12!"){
        this.props.history.push('/dashboard')
    }
    else{
       this.setState({error:true})
    }
    
  }

  render() {
    return (
      <div className={style.login_holder}>
        <label className={style.login_head}>Login</label>
        <div>
          <label className={style.title}>Username:</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
          />
        </div>
        <div>
          <label className={style.title}>Password:</label>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
          />
        </div>
        <Button onClick={this.login}>LOGIN</Button>
        <br/>
        { this.state.error && 
        <span style={{'color':'red','fontWeight':'bold','textAlign':'center'}}>Username/Password Incorrect</span>
        }
      </div>
    )
  }
}
export default Login;
