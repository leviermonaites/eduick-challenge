const init = () => ({
  searchValue: "",
  teacherChecked: true,
  studentChecked: false,
});

export const initialState = init();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      const newState = { ...state };
      newState[action.payload.prop] = action.payload.value;

      if (action.payload.prop === "teacherChecked") {
        newState.studentChecked = false;
      } else if (action.payload.prop === "studentChecked") {
        newState.teacherChecked = false;
      }

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
