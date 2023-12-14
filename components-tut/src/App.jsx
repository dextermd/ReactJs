import './App.css'
import GreetCard from './components/GreetCard/GreetCard'
import TechStack from "./components/TechStack/TechStack.jsx";

function App() {
  // Любой компонент это функция
  // JSX синтаксис -> это возможность писать и возвращать html прямяком из javascript,typescript

    const greetObj = {
        username: 'Mihai',
        role : 'CEO'
    }
    // const techStack = [1,2,3];
    const techStackObj = {techStack: ['React', 'Django', 'Node']};
    return (
        <div className="app">
            <h1 className='app-heading'>Welcome to my first React</h1>
            {/*<GreetCard greetObj={greetObj} a={2}/> Так делать нельзя, школьный вариант */}
            <GreetCard {...greetObj}/>
            {/*<TechStack arr={techStack}/> Так делать нельзя, школьный вариант */}
            <TechStack {...techStackObj}/>
        </div>
  )
}

export default App
