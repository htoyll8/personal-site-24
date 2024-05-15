import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-8" style={{height: "90vh"}}>
        <img src="src/assets/me.png" alt="" className="gradient-background h-72 w-72 rounded-full" />
        <div className="flex flex-row justify-center text-center space-x-3">
          <Link to="/projects" className="underline underline-offset-8">Projects</Link>
          <Link to="/" className="underline underline-offset-8">Linkedin</Link>
        </div>
        <div className="space-y-4 text-center">
          <h3>Hi, I'm Tyler Holloway a Ph.D. at Harvard.</h3>
          <p>Contact me at <a href="mailto:tylerholloway@g.harvard.edu">tylerholloway@g.harvard.edu</a></p>
        </div>
      </div>
    </div>
  )
}

export default Home