import React, { Component } from 'react'
import pic from './pic.jpg'
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';

function HomePage()
{

return(

    <div style={{textAlign:'center'}}>
    <img src={pic} alt='pic'></img>
    </div>

)
}
export default HomePage