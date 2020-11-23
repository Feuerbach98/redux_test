import React, { useCallback, useEffect } from "react";
import './App.scss';
import { getUsers } from './api/api';
import { useDispatch, useSelector } from "react-redux";
import { UsersList } from "./components/UsersList/UsersList";

const App = () => {
  const storage = useSelector(store => store);
  const dispatch = useDispatch();

  const loadUsers = useCallback(async(functionType) => {
    const users = await functionType();

    dispatch({
      type: 'LOAD',
      users: users.users,
    });
  }, [dispatch])

  useEffect(() => {
    loadUsers(getUsers);
  }, [loadUsers]);

  const nextPage = () => {
    if(storage.currentPage === storage.users.length / storage.maxUsers) {
      return
    }

    dispatch({
      type: 'NEXT_PAGE',
    })
  }

  const prevPage = () => {
    if(storage.currentPage === 1) {
      return
    }

    dispatch({
      type: 'PREV_PAGE',
    })
  }

  return (
    <div className="App">
      <UsersList
        users={storage.users}
        maxUsers={storage.maxUsers}
        currentPage={storage.currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default App;
