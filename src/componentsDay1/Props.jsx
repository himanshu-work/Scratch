import React from "react";
// const Greeting=(props)=>{
//     return(
//         <>
//         <h2>Hello! {props.name} </h2>
//         </>
//     )
// }

// const Greeting=({name})=>{ // Cleaner  way to write props(known as destructuring)
//     return(
//         <>
//         <h2>Hello! {name} </h2>
//         </>
//     )
// }

const PersonCard = ({name,age,country}) => {
  return <>
    <h3>Name:{name}</h3>
    <h3> Age: {age}</h3>
    <h3>Country:{country}</h3>
  </>;
};

const Props = () => {
  return (
    <div>
      {/* <Greeting name="kumar" />
        <Greeting name="Hunny" />
        <Greeting name="Ayush" /> */}
        <PersonCard name="kumar" age="24" country="India" />
        <hr />
        <PersonCard name="Hunny" age="26" country="India"/>
    </div>
  );
};

export default Props;
