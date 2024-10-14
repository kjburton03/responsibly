Initial Render: The first time a React component renders. On the initial render of a component, the component's state variables contain the initial values passed to useState.

useEffect: The hook that manages the side-effects in functional components. It accepts two arguments, a callback function and a dependency array. It can watch for the initial render of the component or for any changes in state.

Dependency Array: The second argument passed to the useEffect hook. If the array is empty, the callback function passed to useEffect executes only on the initial render of the component. If the array contains state variables, the callback function will execute anytime the value of the passed state variables change.

Callback Function: A function passed as an argument to another function to be later executed.