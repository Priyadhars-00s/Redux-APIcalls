import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { connect } from "react-redux";
import { login, logout } from "../redux/actions";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    redirect: false,
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/user" />;
    }
    console.log("login->Props", this.props)
    return (
      <div className="Login">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            this.setState({ redirect: true });
          }}
        >
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              name="email"
              value={this.props.user ? this.props.user.email : ""}
              onChange={(e) =>
                this.props.login({
                  ...this.props.user,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.props.user ? this.props.user.password : ""}
              onChange={(e) =>
                this.props.login({
                  ...this.props.user,
                  [e.target.name]: e.target.value,
                  
                })
              }
              />
                          
          </Form.Group>
           <Button block size="lg" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}


const mapStateToProps = (state) => 

({
  user: state.user.user,
  
});

const mapDispatchToProps = {
  login,
  logout,
};
console.log("Inside mapDispatchToProps=====>",login)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
