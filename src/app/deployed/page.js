import NavBar from '../components/NavBar';
import '../css/NotDep.css'
import { FaGithub, FaDownload, FaCode } from 'react-icons/fa'; // Icons for GitHub, Download, and Code

const NotDeployed = () => {
  return (
    <>
    <NavBar />
    <br/>
    <br/>
    <br/>
    <div className="not-deployed-container">
      {/* Highlighted Message */}
      <div className="highlighted-message">
        <h2>🚧 Project Not Deployed 🚧</h2>
        <p>
          This project is not deployed. Please clone the repository and run it on your local machine.
        </p>
      </div>

      {/* Instructions */}
      <div className="instructions">
        <h3>Follow these steps to run the project locally:</h3>
        <div className="step">
          <FaGithub className="step-icon" />
          <h4>Step 1: Clone the Repository</h4>
          <p>Clone the repository from GitHub using the following command:</p>
          {/* <code>git clone https://github.com/your-username/your-repo-name.git</code> */}
        </div>
        <div className="step">
          <FaDownload className="step-icon" />
          <h4>Step 2: Install Dependencies</h4>
          <p>Navigate to the project directory and install the required dependencies:</p>
          <code>cd your-repo-name</code>
          <code>npm install</code>
        </div>
        <div className="step">
          <FaCode className="step-icon" />
          <h4>Step 3: Run the Project</h4>
          <p>Start the development server:</p>
          <code>npm run dev</code>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2025 Naveen. All rights reserved.</p>
      </div>
    </div>
    </>
  );
};

export default NotDeployed;