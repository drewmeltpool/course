import React, {useEffect} from 'react';
import Email from "../Email/Email";
import PropTypes from 'prop-types';
import "./EmailsList.scss";

function EmailsList ( {list} ) {

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