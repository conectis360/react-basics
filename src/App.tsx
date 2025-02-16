import CourseGoal from './components/CourseGoal.tsx'
import Header from './components/Header.tsx'
import goalsImg from './assets/goals.jpg'
import './App.css'

function App() {
  return (
    <>
    <main>
      <Header
        image={{src: goalsImg, alt:"ìmagem"}}
       >
        <h1>YOUR COURSE GOALS</h1>
        </Header>
      <CourseGoal 
        title="teste"
      >TESTE</CourseGoal>
    </main>
    </>
  )
}

export default App
