import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-8" style={{ height: "90vh" }}>
        <img src="me.png" alt="" className="gradient-background h-72 w-72 rounded-full shadow-lg" />
        {/* <div className="space-y-4 text-center">
          <h3 className="text-2xl text-neutral-700">Hi, I'm <span className="font-bold">Tyler Holloway</span></h3>
          <h3 className="text-2xl text-neutral-700">A CS Ph.D. researching <span className="font-bold">Automated Code Generation</span></h3>
          <p className="text-lg font-thin text-zinc-600">Contact me at <a href="mailto:tylerholloway@g.harvard.edu" className="text-blue-600 hover:text-blue-800 transition duration-300">tylerholloway@g.harvard.edu</a></p>
        </div> */}
        <div className="space-y-2 text-center">
          <h3 className="text-2xl text-neutral-700">Hi, I'm <span className="font-bold">Tyler Holloway</span></h3>
          <h3 className="text-xl text-neutral-600 font-light leading-tight">
            A CS Ph.D. researching <span className="font-semibold text-neutral-800">Automated Code Generation</span>
          </h3>
          <p className="text-lg font-thin text-zinc-600 mt-4">
            Contact me at <a href="mailto:tylerholloway@g.harvard.edu" className="text-blue-600 hover:text-blue-800 transition duration-300">tylerholloway@g.harvard.edu</a>
          </p>
        </div>
        <div className="flex flex-row justify-center text-center space-x-5">
          {/* Projects */}
          <Link to="/projects" className="text-lg font-light hover:text-gray-700 underline underline-offset-8 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(38 38 38)" class="bi bi-archive h-6 w-6" viewBox="0 0 16 16">
              <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>
          </Link>
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/tyler-holloway-482888141"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(38 38 38)"
              className="bi bi-linkedin h-6 w-6"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          {/* Github */}
          <a
            href="https://github.com/htoyll8"
            className="text-lg font-light hover:text-gray-700 underline underline-offset-8 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="h-6 w-6" viewBox="0 0 438.549 438.549">
              <path
                fill="rgb(38 38 38)"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}


export default Home
