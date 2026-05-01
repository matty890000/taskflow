import Login from "./components/Login";
import bgVideo from "./assets/sky-video.mp4"

const App = () => {
  return (

<div className="relative flex justify-center items-center min-h-screen overflow-hidden">

<video src={bgVideo} 
  autoPlay
  loop
  muted
  className="absolute inset-0 h-full w-full object-cover"
></video>


<div className="absolute z-10">
  <Login/>
</div>
</div>





  )
}

export default App;