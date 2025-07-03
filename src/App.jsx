import React from 'react'
import SingleComponent from './componentsDay1/SingleComponent'
import MultipleComp from './componentsDay1/MultipleComp'
import Props from './componentsDay1/Props'
import Counter from './componentsDay1/Counter'
import FormHandling from './componentsDay2/FormHandling'
import FormSubmission from './componentsDay2/FormSubmission'
import Basic from './componentsDay2/ListRendering/Basic'
import Todo from './componentsDay2/Todo'
import ConditionalRendering from './componentsDay3/ConditionalRendering'
import ExampleConditionalRendering from './componentsDay3/ExampleConditionalRendering'
import UserCard from './componentsDay3/UserCard'

const App = () => {
  return (
    <div>
      {/* <SingleComponent/> */}
      {/* <MultipleComp /> */}
      {/* <Props/> */}
      {/* <Counter/> */}
      {/* <FormHandling/> */}
      {/* <FormSubmission/> */}
      {/* <Basic/> */}
      {/* <Todo/> */}
      {/* <ConditionalRendering/> */}
      {/* <ExampleConditionalRendering/> */}
      <UserCard name={"Hunny"} age={25} hobby={"Playing Cards"} />
      <UserCard name={"Kumar"} age={25} hobby={"Playing PS5"} />
    </div>
  )
}

export default App