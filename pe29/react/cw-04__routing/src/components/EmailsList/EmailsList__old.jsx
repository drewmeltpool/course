import React, {Component} from 'react';
import Email from "../Email/Email";
import PropTypes from 'prop-types';
import "./EmailsList.scss";

class EmailsList extends Component {
  // static defaultProps = {
  //   list: []
  // };

  // static propTypes = {
  //   list: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       from: PropTypes.string,
  //       to: PropTypes.string,
  //       text: PropTypes.string
  //     })
  //   )
  // };

  componentDidMount() {
    console.log('EmailsList ---> componentDidMount');
  }

  // shouldComponentUpdate() {
  //   console.log('EmailsList ---> componentShouldUpdate');
  // }

  componentWillUnmount() {
    console.log('EmailsList ---> componentWillUnmount');
  }

  render() {
    const {list} = this.props;
    const emails = list.map((emailObj, ind) => (
      <Email key={ind}
             self={emailObj}
      />
    ));
    console.log('EmailsList ---> render');

    return (
      <div className='emails-list'>
        {emails}
      </div>
    );
  }
}

// EmailsList.defaultProps = {
//   list: []
// };'
EmailsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default EmailsList;