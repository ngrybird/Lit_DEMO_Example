const INITIAL_STATE = 0;
  
  export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'INCREMENT': 
        return state + 1
      default:
        return state;
    }
  };