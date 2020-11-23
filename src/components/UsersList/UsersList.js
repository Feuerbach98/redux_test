import { Button, CircularProgress, List } from '@material-ui/core';
import React from 'react';
import { User } from '../User/User';
import './UsersList.scss';

export const UsersList = ({
  users,
  maxUsers,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const slicedUsers = users.slice(
    currentPage * maxUsers - maxUsers,
    currentPage * maxUsers
  );

  return (
    <>
      <h1>Users</h1>
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
