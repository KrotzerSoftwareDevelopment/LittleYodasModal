import React from "react";
import StickyFooter from 'react-sticky-footer';
import '../pages/Home.css';
class Footer extends React.Component {
  render(){
    return (
        <StickyFooter
        bottomThreshold={50}
        normalStyles={{
        backgroundColor: "#999999",
        padding: "2rem"
        }}
        
    >
    <div className="copyrightText">
        &copy; 2020 LittleYodas All Rights Reserved
        </div>
    </StickyFooter>
    ); 
  
  }
}
  export default Footer;
  