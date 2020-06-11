let state;
function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
      break
    default:
      return state 
  }
}

function dispatch(action) {
  state = reducer(state, action)
  render()
}

function render() {
  let container = document.getElementById('container')
  container.textContent = state.count
}
dispatch({action: "init"})

document.getElementById('button').addEventListener('click', () => {
  dispatch({type: "INCREASE_COUNT"})  
});

