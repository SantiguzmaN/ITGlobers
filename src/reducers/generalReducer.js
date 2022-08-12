const initialState = {
  emails: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_EMAIL':
    let emails = state.emails || [];
    emails.push(action.payload);
    return {
      ...state,
      emails: state.emails
    };
  default:
    return state;
  }
};

export default reducer;
