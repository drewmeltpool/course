import React, {Component} from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import EmailsList from "./components/EmailsList/EmailsList";
import Title from "./components/Title/Title";
import ChangeNameBtn from "./components/ChangeNameBtn/ChangeNameBtn";
import './App.scss';

class App extends Component {
  state = {
    name: "Gogi",
    activeFolder: "inbox",
  };

  render() {
    if (!this.state.allEmails) {
      return <p>loading</p>
    }

    const {allEmails, activeFolder} = this.state;
    const folders = Object.keys(allEmails);

    return (
      <div className="email-client container">
        <Sidebar itemsList={folders} setActiveFolder={newActive => this.setActiveFolder(newActive)}/>
        <EmailsList list={allEmails[activeFolder]}/>
        {/*<Title name={name}/>*/}
        {/*<ChangeNameBtn changeNameState={name => this.setState({name})}/>*/}
      </div>
    );
  }

  setActiveFolder(newActiveFolder) {
    this.setState({activeFolder: newActiveFolder})
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        allEmails: {
          inbox: [
            {
              subject: "Hello world",
              from: "gogidoe@somemail.nothing",
              to: "lolabola@ui.ux",
              text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            },
            {
              subject: "How could you?!",
              from: "ladyboss@somemail.nothing",
              to: "ingeneer@nomail.here",
              text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            },
          ],
          draft: [],
          sent: [
            {
              subject: "Acces denied",
              from: "info@cornhub.com",
              to: "gogidoe@somemail.nothing",
              text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            }
          ],
          spam: [
            {from: "me@me.me", to: "you@you.you", subject: "here", text: "now you now something..."}
          ]
        }
      })
    }, 1000);
  }
}

export default App;
