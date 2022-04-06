// a component is a function, names start with a capital letter, files start with lowers
//exports the function
//always must return something
//need to put the path from where we were working
//we need to force css to follow a specific scope, not the whole document, always put classes and ids
import "./navBar.css";
function Navbar(){
    return(
    <div class="navbar">
        <h1>Im a NavBar</h1>
    </div>
    );
}

export default Navbar;