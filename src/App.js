// @flow
import React, { Suspense,useState } from 'react';
import Users from './Users';
import { RecoilRoot, atom, useRecoilState, selector,useRecoilValue } from 'recoil';
// import About from './About';
// import {add} from './math';
import './App.css';
//Code Splitting
// console.log(add(10,30));
// import ('./math').then((result)=>{
//   console.log("Result is : "+result.add(20,30));
// })
//const About=React.lazy(()=>import('./About'));

//react create element
//const List=(props)=>React.createElement('div',{className:"App"},`Hello ${props.name}.`);


// const App=()=>{
function App() {
//React dev tools
const [data,setData]=useState("Hello")
const [data1,setData1]=useState("Hie!!")

  return (
    //Code Splitting
    // <Suspense fallback={<div>Wait</div>}>
    // {/* <h1>Code Splitting</h1> */}
    // <About/>
    // </Suspense>

    // Fragment
    //   <div>
    //   <h1>Fragment</h1>
    //  <ul> <List/></ul>
    //   </div>

    // react create element
    //   <div className="App">
    //  <ul>
    //  {/* <h1>React.createElement </h1> */}
    //  <List name="Anshul"/>
    //  </ul>
    //   </div>

    //Recoil 
    // <div className="App">
    //   {/* <h1>Recoil </h1> */}
    //   <RecoilRoot>
    //     <h1>Char Counter </h1>
    //     <CharCount />
    //     <GetCharValue />
    //     <GetCharLength/>
    //   </RecoilRoot>
    // </div>

    // // static type checking with flow
    // <div className="App">
    // <h1>Static type checking with flow </h1>
    // </div>

    // React dev tools
    <div className="App">
    <h1>React dev tools </h1>
    <Users name="Anshul" email="anshul@gmail.com" phone="98443544435"/>
    </div>





  );
};

//Fragment
// const List=()=>{
//   return <>
//     <li>Name</li>
//     <li>Age</li>
//     <li>Email</li>
//   </>
// }

// react create element
// const List=()=>{
//   return <div>Hello Anshul</div>
// }

//Recoil creating Atom
// const charAtom = atom({
//   key: 'charState',
//   default: 0
// })

// function CharCount() {
//   const [text, setText] = useRecoilState(charAtom)
//   return (
//     <div>
//       <input type="text" onChange={(e) => setText(e.target.value)} />
//     </div>
//   )
// }

// function GetCharValue() {
//   const [text, setText] = useRecoilState(charAtom)
//   return (
//     <div>
//       <h3>{text}</h3>
//     </div>
//   )
// }

// function GetCharLength(){
//   return (
//     <div>
//       <h3>{useRecoilValue(CharValueSelector)}</h3>
//     </div>
//   )
// }

// const CharValueSelector = selector({   //creating selector
//   key: 'CharValueSelector',
//   get: ({ get }) => {
//     const text = get(charAtom)
//     return text.length
//   }
// })

export default App;
