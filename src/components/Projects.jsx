import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start space-y-4 px-4" style={{ minHeight: "100vh", paddingBottom: "2rem" }}>
        {/* Profile Image with Tooltip */}
        <div className="relative group">
          <Link to="/" className="relative z-10">
            <img src="me.png" alt="Profile" className="gradient-background h-20 w-20 rounded-full" />
          </Link>
          {/* Tooltip Bubble */}
          <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-200 text-gray-800 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Go back to homepage
          </div>
        </div>

        {/* Projects List */}
        <div className="w-full max-w-3xl">
          <ul className="space-y-8">
            <li>
              <div className="text-left">
                <strong className="block text-lg mb-2">Reverse Sketching</strong>
                <ul className="list-none pl-4 space-y-2">
                  <li><strong>Authors:</strong> Tyler Holloway, Chelse Swoopes, Ian Arawjo, Hila Peleg, Elena Glassman</li>
                  <li><strong>Publication Date:</strong> 2023</li>
                  <li><strong>Venue:</strong> <Link to="https://2023.plateau-workshop.org/" className="text-blue-500 underline">PLATEAU Workshop</Link></li>
                  <li>
                    <strong>Description:</strong> To avoid overwhelming users, many interactive programming-by-example (PBE) systems show only the highest-ranked programs, even when tens or hundreds of programs satisfy the provided examples. While this reduces the number of candidate programs users must consider, it limits their ability to fully understand the solution space. This paper introduces reverse sketching, a novel algorithm using anti-unification to generate a set of sketches (partially complete programs with "holes") that capture the syntactic structure of multiple programs in the solution space. These sketches aim to help users identify the desired program, discover better alternatives, and better understand the system's behavior to refine future examples.
                  </li>
                  <li><Link to="https://figshare.com/articles/conference_contribution/Reverse_Sketching/22277320?file=39730573" className="text-blue-500 underline">Download PDF</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="text-left">
                <strong className="block text-lg mb-2">On the Role of Context Granularity in LLM-Driven Program Repair</strong>
                <ul className="list-none pl-4 space-y-2">
                  <li><strong>Authors:</strong> Tyler Holloway, Ethan R. Elenberg, AI Permanence</li>
                  <li><strong>Publication Date:</strong> 2024</li>
                  <li><strong>Venue:</strong> <Link to="https://mlforsystems.org/" className="text-blue-500 underline">ML for Systems Workshop at NeurIPS 2024</Link></li>
                  <li>
                    <strong>Description:</strong> This paper explores the role of context granularity in Automated Program Repair (APR), focusing on its impact on patch correctness. Using backward static slicing, we propose a context granularity strategy capturing lines on which the buggy line is data- and control-dependent. We evaluate this approach against five existing granularities and state-of-the-art APR systems using GPT-4 on the Defects4J dataset. Results show that the sliced context achieves the highest Correct/Plausible ratio (79%), suggesting that a focused context improves the semantic accuracy of patches per test case. The paper concludes by recommending future explorations of combined context strategies for optimal results.
                  </li>
                  <li><Link to="https://mlforsystems.org/assets/papers/neurips2024/paper23.pdf" className="text-blue-500 underline">Download PDF</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="text-left">
                <strong className="block text-lg mb-2">The Impact of Revealing Large Language Model Stochasticity on Trust, Reliability, and Anthropomorphization</strong>
                <ul className="list-none pl-4 space-y-2">
                  <li><strong>Authors:</strong> Chelse Swoopes, Tyler Holloway, Elena L. Glassman</li>
                  <li><strong>Affiliation:</strong> Harvard University</li>
                  <li><strong>Publication Date:</strong> 2024</li>
                  <li><strong>Venue:</strong> <Link to="https://chi-trew.github.io/#/" className="text-blue-500 underline">CHI TREW Workshop 2024</Link></li>
                  <li>
                    <strong>Description:</strong> Interfaces for interacting with Large Language Models (LLMs) are often designed to mimic human conversations, typically presenting a single response to user queries. This design can obscure the stochastic and predictive nature of these models, fostering undue trust and anthropomorphization. This paper investigates:
                  </li>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The effect of displaying multiple responses simultaneously as a countermeasure.</li>
                    <li>A cognitive support mechanism that highlights structural and semantic similarities across responses to manage cognitive load.</li>
                  </ul>
                  <li>
                    A within-subjects study evaluated participants' workload, trust, and reliance, showing that presenting multiple responses, with cognitive support, provides significant benefits in managing users’ perception of LLMs' reliability and stochasticity.
                  </li>
                  <li><Link to="/pdfs/llm-stochasticity.pdf" className="text-blue-500 underline">Download PDF</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;