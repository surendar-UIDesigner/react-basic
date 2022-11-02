//ReactDOM.render(<h1>Suren Home</h1>, document.getElementById("root"))
//import ReactDOM from 'react';
import ReactDOM from 'react-dom'

ReactDOM.render(
<ul className='unlist'>
    <li>List2</li>
    <li>List3</li>
    <li>List5</li>
</ul>,
 document.getElementById("top_header")
)
 


const h1 = document.createElement("h1")
h1.textContent = "javascript build display h1 without use innerHtml"
h1.className = "header"
document.getElementById("javascriptwithoutinnerhtml").append(h1)

function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>

            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

function Headertop() {
    return(
    <h1>Welcome to New React Product</h1>
    )
}

ReactDOM.render(
    <div className='container'>
    <Navbar />
    <Headertop />
    </div>,
    document.getElementById("root")
)
