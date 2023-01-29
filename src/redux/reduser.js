
const reducer = (state = {value: 0, name: 'tolkinxon'}, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          value: state.value + 1
        }
      case 'DECREMENT':
        return {
          ...state,
          value: state.value - 1
        }
      case 'RANDOM':
        return {
          ...state,
          value: state.value * action.payload
        }
  
      default:
        return state
    }
  }

  export default reducer