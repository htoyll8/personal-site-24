import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2" style={{height: "90vh"}}>
      <img src="src/assets/me.png" alt="" className="gradient-background h-20 w-20 rounded-full" />
      <div className="flex flex-row justify-center space-x-3">
        <Link to="/projects" className="underline underline-offset-8">Projects</Link>
        <Link to="/" className="underline underline-offset-8">Linkedin</Link>
      </div>
      <div className="flex flex-row justify-start text-left">
        <div>
          <ul className="list-disc space-y-2">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>Project 4</li>
            <li>Project 5</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects