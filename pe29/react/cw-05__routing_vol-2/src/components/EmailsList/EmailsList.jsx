import React, {useEffect} from 'react';
import Email from "../Email/Email";
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom'
import "./EmailsList.scss";

function EmailsList(props) {
  const {list} = props;
  const history = useHistory();
  console.log('history', history);
  useEffect(() => {
    console.log('EmailsList ---> componentDidMount');

    return () => {
      console.log('EmailsList ---> componentWillUnmount');
    }
  }, []);

  const emails = list.map((emailObj, ind) => (
    <Email key={ind}
           self={emailObj}
    />
  ));
  console.log('EmailsList ---> render');
  console.log('props', props);

  return (
    <div className='emails-list'>
      {emails}
    </div>
  );
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