import React from 'react';
import { Layout } from 'antd';
import { DatePicker } from 'antd';
//import '../App.css';

const { Content, Footer } = Layout;

class Booking extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date :" "
        }
    }
    render() { 

    return (

          <div >
            <Layout className="layout">
                <Content style={{ padding: '0 20px' }}>
                    <div style={{ background: '#f0f', padding: 24, minHeight: 600 }}>

                         <h1>Booking Page</h1>
                         <br/>
                         <h3>Select the date and time you want for our in-house service</h3>
                    </div>
                    <div>
                      <DatePicker  />
                      <br/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}> ©2019</Footer>
          </Layout>
        </div>
    )
  } ;
}


export default Booking;