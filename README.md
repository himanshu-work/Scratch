DAY-1 :

## What is react?
-- React is a javascript library for building user Interfaces.
--It helps us to build fast, dynamic web application using components(Small reusable piece of code).


## What is JSX?  (HTML + JavaSript)
--JSX allows us to write HTML inside javascript.
-- This is possible because react uses a tool called babel that converts jsx into regular      javascript behind the scenes.
Example-- const element=<h1> Hello! JSX </h1>   (That looks like HTML, but it’s actually JavaScript code that React understands)


## What are react Components?
-- React components are the building block of our UI. Each part of your app (header, footer, buttons, etc.) can be built as a reusable component. 
--Make a single component. (See File SingleComponent.jsx). 
-- Make One component inside another. (See File MultipleComp.jsx).


## What are Props?
-- Props(short for properties) are like function arguements for component.
--They allow us to send data from parent component to child component.
-- How to send data (see in Props.jsx).
-- props : object is passed to component ,  props.name: A specific value sent to the component .
-- Props are read-only that means it cann't be changed in child component.


## What is State in react?
--State is like component's memory.
--It stores the value that can be changed over time.(userInput , Counter).
-- When state changes react automatic re-renders the components with new data.
-- See state in Counter.jsx.




## DAY-2: ---------------------------------------------------
## Handling forms and User Inputs (See in FormHandling.jsx)
--Get input from user.
-- store it using state.
-- React to changes(like live preview or submission).
{
    useState -- stores the input in a variable.
    value{name}-- Makes this a controlled input.
    onchange --- update name every time when the user types .
}



## Handling Form Submission in React(See in FormSubmission.jsx)
-- We will create a form with name and email.
   -A submit button.
   -React will :-
     -Prevent the page from loading.
     - Collect the form data.
     -Show it on the screen(or console).
     -Clear the input fields after submit.
     -Show error if name/email is empty



## Rendering Lists in React
- React doesnot have a special list-rendering tool so it uses javascript's map() method to loop throught array and return JSX.
- (See in ListRendering/Basic.jsx).
- List of Objects.(See in ObjectList.jsx)

# Key 
- React usesu key to keep track of which items changed when updating the UI.
-Every item in a list must have a unique key.
- Avoid using index unless you are not absolutely sure the list will never change order, instead use a unique Id if possible.



# Todo- List
Build a simple to-do list with the ability to add and remove items.


## Day 3---------------------------------------------

# Conditional Rendering in React
--By using ternary operator
  {isLogin ?<p> Welcome back!</p>: <p>Please Login</p>}

-- Show/ hide with &&(Logical AND)
   {notifications.length>0 && <p> You have {notifications.length} new messages.</p>}

-- Full component example is in 'ConditionalRendering.jsx'

-- Example of conditional rendering (See in ''ExampleConditionalRendering.jsx)
  -Asks for a name
  -Shows "Hello, [name]" after the form is submitted
  -Hides the input after submit (i.e., conditional UI)


# Reusable Components in React
- Why reuse?
  Suppose we have a button, a card,or a form field that appears in multiple places.Instead of rewriting the same JSX over and over , we can wrap it in component and reuse it - with different data passed via props.

- Example of a reusable UserCard component.(UserCard.jsx).




# Day4 ------------------------------------------------------------
# Routing With React Router
--This allows you to make multipages app using React Router DOM.

# What is React Router?
React router lets you build single page apps with multiple routes(URLS) like :
-- '/'  -> Home page
-- '/about'  ->About page
-- '/profile'  -> profile page
 - NOTE:-  React handles it all without reloading the page.

 # Route Parameters(/user/:id)
 --Use route parameters when you want dynamic URL like viewing a user profile by ID.
 --(see in RouterParameters.jsx)
 

# Programmatic Navigation
 Instead of clicking a link , you can navigate via code(e.g. after form submission or a button click).
--(see in Login.jsx)


# 404 Not Found Route
--<Route path="*" element={<NotFound />} />


# Mini project(Mini Dashboard App)
- PAGES
  -- '/' -->Home 
  -- '/login' -->Login Page
  -- '/dashboard' --> Protected page(only visible when logged in)
  -- '/user/:id' -->user detail page (uses URL param)
  -- '*' -->404 Not Found

- FEATURES
  -- Simulated login(useState)
  --Redirect after Login
  -- Block access to dahboard if not logged in
  -- Navigate to '/user/101 with dynamic route.


# useEffect Hook
-- useEffect hook is used to handle side effects.
-- Anything that happens outside of the component's render is called side effects( Api calls , timers .accessing local storage).
 
 