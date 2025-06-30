What is react?
-- React is a javascript library for building user Interfaces.
--It helps us to build fast, dynamic web application using components(Small reusable piece of code).


What is JSX?  (HTML + JavaSript)
--JSX allows us to write HTML inside javascript.
-- This is possible because react uses a tool called babel that converts jsx into regular      javascript behind the scenes.
Example-- const element=<h1> Hello! JSX </h1>   (That looks like HTML, but it’s actually JavaScript code that React understands)


What are react Components?
-- React components are the building block of our UI. Each part of your app (header, footer, buttons, etc.) can be built as a reusable component. 
--Make a single component. (See File SingleComponent.jsx). 
-- Make One component inside another. (See File MultipleComp.jsx).


What are Props?
-- Props(short for properties) are like function arguements for component.
--They allow us to send data from parent component to child component.
-- How to send data (see in Props.jsx).
-- props : object is passed to component ,  props.name: A specific value sent to the component .
-- Props are read-only that means it cann't be changed in child component.


What is State in react?
--State is like component's memory.
--It stores the value that can be changed over time.(userInput , Counter).
-- When state changes react automatic re-renders the components with new data.
-- See state in Counter.jsx.
