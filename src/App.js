import menu from './images/menu-top-xs.png';
import logo from './images/ironhack-logo-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import './App.css';



function App() {
       const title = (
        <h1>Say hello to <br/>ReactJS</h1>
       );
       const subtitle = (
        <h3>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer.</h3>
       );
       const word = (
        <h2>Awesome!</h2>
       );
      
  return (
    <div className="App">
    <img src= {logo}></img>
    <img src= {menu}></img>

     {title}
     {subtitle}
     {word}
    
    <img src= {icon1}></img>
    <h2>Declarative</h2>
    <h4>React makes it<br/>painless to create<br/>interactive UIs.</h4>
    <img src= {icon2}></img>
    <h2>Components</h2>
    <h4>Build encapsulated<br/>components that<br/>manage their state.</h4>
    <img src= {icon3}></img>
    <h2>Single-Way</h2>
    <h4>A set of immutable<br/>values are passed to<br/>the component's.</h4>
    <img src= {icon4}></img>
    <h2>JSX</h2>
    <h4>Statically-typed,<br/>designed to run on<br/>modern browsers.</h4>

    </div>
  );
}
export default App;
