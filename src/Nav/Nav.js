import React from 'react';
import { Link, Route} from 'react-router-dom'
import './Nav.css';


const HomePage=()=>{return <h1>Welcome home</h1>}
const News=()=>{return <h1>News: You look beautiful today!</h1>}
const Shops=()=>(
  <div className="Nested">    
    <Link className="sublink" to="/shops/sousse">Sousse</Link>
    <Link className="sublink" to="/shops/monastir">Monastir</Link>
    <Link className="sublink" to="/shops/mahdia">Mahdia</Link>
  <div>
    <Route  path="/shops/sousse" render={() =>'Sousse'} />
    <Route  path="/shops/monastir" render={() => 'Monastir'} />
    <Route  path="/shops/mahdia" render={() => 'Mahdia'} />
  </div>
  </div>
) 


const Nav=()=>(
    <div className="nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/news">News</Link>
      <Link className="link" to="/shops">Our shops</Link>
      
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/news" component={News}/>
        <Route path="/shops" component={Shops}/>
      </div>
    </div>
  )


export default Nav;