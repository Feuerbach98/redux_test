import { createStore } from 'redux';

const initialState = {
  users: [],
  maxUsers: 5,
  currentPage: 1,
  choosedUserId: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD': {
      return {
        ...state,
        users: action.users,
      }
    }

    case 'NEXT_PAGE': {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      }
    }

    case 'PREV_PAGE': {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      }
    }

    case 'CHANGE_CHOOSED_USER': {
      return {
        ...state,
        choosedUserId: action.nextUserId,
      }
    }

    default: {
      return state;
    }
  }
}

export const store = createStore(reducer, initialState);
