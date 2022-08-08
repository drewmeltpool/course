import * as React from "react";
import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
  state = {
    user: null,
    posts: [],
  };

  render() {
    const {user, posts} = this.state;
    const postsContent = posts.map((singlePost,index) => <div key={index}>
      <p>author: {user.name}</p>
      <p>Text:</p>
      <p>{singlePost}</p>
    </div>);

    return (
      <div className="container">
        {!user && <button onClick={() => this.handleLogin()}>Login</button>}

        {user && <div>
          <h1>Hello {user.name}</h1>
          <button onClick={() => this.handleCreatePost()}>create post</button>
        </div>}

        <div>{postsContent}</div>
      </div>
    )
  }

  handleCreatePost() {
    const postContent = prompt("Tell me what you think about");
    const {posts} = this.state;

    posts.push(postContent);

    this.setState({
      posts: [...posts]
    })
  }

  handleLogin() {
    const name = prompt('What is your name');
    const age = prompt('How old is your grandma?');

    this.setState({
      user: {name, age}
    })
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           Shmedit <code>src/App.js</code> and save to reload.
//         </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
