import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

export default function App() {
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/topics'>
            <Topics />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home(){
  return <h2>Home Page</h2>
}

function About() {
  return <h2>About Page</h2>
}

function Topics(){
  return <h2>Topics Page</h2>
}


















// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Home from './components/Home';
// import About from './components/About';
// import User from './components/User';

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route exact path="/about" component={About} />
//           <Route exact path="/users" component={User} />
//           <Route exact path="/" component={Home} />
//           <Route exact path='/pathName/:id' />
//         </Switch>
//       </div>
//     </Router>
//   );
// }



