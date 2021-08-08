import { Link } from 'react-router-dom'

function About() {
  return (
    <div id="about">
      <h3 id="version">Version 1.0.0</h3>
      <hr/>
      <h4>- Developed by -</h4>
      <hr/>
      <h4 id="aboutDev">
        <span id="dev">Hafizul Haque</span><br/>
        CSE, CUET, Ex-Notredamian<br/>
        Programmer | Full-Stack Javascript Developer <br/>
        Cell No: +8801818925451<br/>
        E-mail: hafizulhaque.cse.cuet@gmail.com<br/>
      </h4>
      <Link to={process.env.PUBLIC_URL + '/'}>Go Back</Link>
    </div>
  )
}

export default About
