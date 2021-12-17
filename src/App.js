import axios from 'axios';
import React, {useState, useEffect} from 'react';

export default function App() {
   const [data, setData] = useState("");
   const [count, setCount] = useState(0);
  
   useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/comments")
         .then((response) => {
           setData(response.data[0].email)
           console.log('Call API')
         })
   }, [])

   return(
     <div>
       <h3>Hello World</h3>
       <h4>{data}</h4>
       <h4>{count}</h4>
       <button onClick={() => {setCount(count + 1)}}>Click</button>
     </div>
   )
}

























// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from 'react-router-dom';

// export default function App() {
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/about'>About</Link>
//           </li>
//           <li>
//             <Link to='/topics'>Topics</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path='/about'>
//             <About />
//           </Route>
//           <Route path='/topics'>
//             <Topics />
//           </Route>
//           <Route path='/'>
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// function Home(){
//   return <h2>Home Page</h2>
// }

// function About() {
//   return <h2>About Page</h2>
// }

// function Topics(){
//   let match = useRouteMatch();
//   console.log(match);

//   return(
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/first`}>Inner Topic One</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/second`}>Inner Topic Two</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic/>
//         </Route>
//         <Route path='/topics'>
//           <h3>Please select a topic</h3>
//         </Route>
//       </Switch>
//     </div>
//   )
// }

// function Topic(){
//   let {topicId} = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>
// }


















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



