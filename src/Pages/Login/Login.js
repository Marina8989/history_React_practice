import React from 'react';

class Login extends React.Component{
    state={
        email: '',
        pwd: ''
    }
    handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({[name]: value})
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.isLogin(true)
    }
    render(){
        return(
            <div>
                <div>
                    <Logo />
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' onChange={this.handleChange} />
                        <input type='password' name='pwd' placeholder='password...' onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login