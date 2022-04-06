import whiteLogo from '../../Images/tinder_logo_white.jpeg';
import colorLogo from '../../Images/tinder_logo_colour.png';




const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
}

const authToken = true;

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="tinder-logo"/>
            </div>

            {!authToken && !minimal && <button className="nav-button"
            onClick={handleClick}
            disabled={showModal}
            >Log In</button>}
        </nav>
    )
}

export default Nav;