import { Card, ListItem } from '@material-ui/core';
import React from 'react';
import './User.scss';
import { UserShape } from '../../shapes/UserShape';

export const User = ({ user }) => {
  const { name, surname, desc } = user;

  return (
    <ListItem className="list-item">
      <Card className="list-item__card">
        <h3>{`${name} ${surname}`}</h3>
        <p>{desc}</p>
      </Card>
    </ListItem>
  );
}

User.propTypes = {
  user: UserShape,
};
