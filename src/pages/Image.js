import React from "react";
import { connect } from "react-redux";
import { fetchuserDetails, logout, getImage } from "../redux/actions";
import { Table, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { getImage } from "../redux/actions";


class Image extends React.Component {
    constructor(props){
        super(props);
        
    }
      render() {
        
          return <button onClick={this.props.getImage}>Get Cats</button>
        }
        
  
  }

const mapStateToProps = (state) => ({
  Image: state.user.Image
  
});


export default connect(mapStateToProps)(Image);
