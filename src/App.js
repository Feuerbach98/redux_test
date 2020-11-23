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

  const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
  
    return Math.round(rand);
  }

  const changeChoosedUser = useCallback(() => {
    if (storage.users.length === 0) {
      return
    }

    const nextUserId = randomInteger(1, storage.users.length);

    dispatch({
      type: 'CHANGE_CHOOSED_USER',
      nextUserId,
    })
  }, [dispatch, storage.users.length])

  useEffect(() => {
    loadUsers(getUsers);
    changeChoosedUser();
    setInterval(changeChoosedUser, 8000);
  }, [loadUsers, changeChoosedUser]);

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
        choosedUserId={storage.choosedUserId}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default App;
