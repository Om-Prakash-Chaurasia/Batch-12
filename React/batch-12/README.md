<!-- Hooks in React :- React Hooks are functions that allows you to use state and other React features in functional components.

1. useState Hook :- Managing state in Functional components. It returns a state variable and a function to update that variable.

Syntax :-
import { useState } from 'react';
const [call, setCall] = useState('0');



2. useEffect Hook :- Side Effect and Lifecycle Management in functional components.

=> We use useEffect hook in our functional components whenever we want to perform some side-effect in our function.

=> setInterval, setTimeout, directly updating the dom and fetching an api.

=> It does the same thing which is done by componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

=> useEffect hook accepts 2 args. 1st is your function to perform sided-effect and 2nd is optional which is your dependency array.

=> When we use useEffect hook then it will execute at least once. i.e. during the 1st render i.e. while the component is mounting.

 -->
