import React from "react";
import { connect } from "react-redux";
import { fetchuserDetails, logout } from "../redux/actions";
import { Table, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  state={
    logout:false,
  }
  componentDidMount() {
    this.props.fetchuserDetails()
  }

  render() {
    if(this.state.logout){
      this.props.logout()
      return <Redirect to="/" />
    }
    console.log("userpage->Props", this.props)
    return (
      <div>
        <div style={{padding:"2vh"}}>
        <Button onClick={()=>{this.setState({logout: true})}}>logout</Button>
        </div>
        <Table
          striped
          bordered
          hover
          style={{
            minWidth: "100%",
            // display: "block",
            tableLayout: "fixed",
            width: "100px",
            overflow: "auto",
          }}
        >
          <thead>
            <tr>
              <th>UserName</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          {this.props &&
            this.props.users &&
            this.props.users.map((data) => {
              return (
                <tbody key={data.id}>
                  <tr>
                    <td>{data.employee_name}</td>
                    <td>{data.employee_age}</td>
                    <td>{data.employee_salary}</td>
                  </tr>
                </tbody>
              );
            })}
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  users: state.user.users,
});

const mapDispatchToProps = {
  fetchuserDetails,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
