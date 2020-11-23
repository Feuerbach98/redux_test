import { Button, CircularProgress, List } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './UsersList.scss';

export const UsersList = ({
  users,
  maxUsers,
  currentPage,
  nextPage,
  prevPage,
  choosedUserId,
}) => {
  const slicedUsers = users.slice(
    currentPage * maxUsers - maxUsers,
    currentPage * maxUsers
  );

  return (
    <>
      <h1>Users</h1>
      <p>{users[choosedUserId] ? `${users[choosedUserId].name} ${users[choosedUserId].surname}` : null}</p>
      <List className="list">
        {slicedUsers.length ? (
          slicedUsers.map((user) => <User key={user.id} user={user} />)
        ) : (
          <div className="progress">
            <CircularProgress />
          </div>
        )}
      </List>
      <div>
        {slicedUsers.length ? (
          <>
            <Button
              type="button"
              onClick={prevPage}
              variant="contained"
              color={(currentPage > 1) ? 'primary' : 'default'}
              style={{margin: 10 + 'px'}}
            >
              Prev
            </Button>
            <span>{currentPage}</span>
            <Button
              type="button"
              onClick={nextPage}
              variant="contained"
              color={(currentPage !== users.length / maxUsers) ? 'primary' : 'default'}
              style={{margin: 10 + 'px'}}
            >
              Next
            </Button>
          </>
        ) : null}
      </div>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  maxUsers: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  choosedUserId: PropTypes.number.isRequired,
}
