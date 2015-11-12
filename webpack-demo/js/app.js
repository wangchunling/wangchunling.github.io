import React from 'react';
import Couponlist  from './Couponlist.js';
var App = React.createClass({
   render(){
       return (
           <Couponlist/>
       )
   }
})
React.render(<App/>,document.getElementById('app'));