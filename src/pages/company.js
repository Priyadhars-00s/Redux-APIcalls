import React from "react";
import { connect } from "react-redux";
import { companyUser, fetchCompanyDetails, logout } from "../redux/actions";
import { Table, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Company extends React.Component {
  state={
    logout:true,
  }
    
  
  componentDidMount() {
    this.props.fetchCompanyDetails()
  }
  
  render() {
    if (this.state.redirect) {
      return <Redirect to="/company" />;
    } 
    
    return (
      <div>
        <div style={{padding:"2vh"}}>
        <Button onClick={data => companyUser(data)}>CompanyDetails</Button>
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
              <th>id</th>
              <th>Name</th>
              <th>username</th>
              <th>email</th>
            </tr>
          </thead>
          {this.props &&
            this.props.company &&
            this.props.company.map((data) => {
                console.log("Map",data)
              return (
                <tbody key={data.id}>
                  <tr>
                  <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
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
  company:state.user.company,
});

const mapDispatchToProps = {
  fetchCompanyDetails,

};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
