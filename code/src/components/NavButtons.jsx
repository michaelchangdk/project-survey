import React from 'react';

import forwardButton from '../assets/forward-purple.png'
import backButton from '../assets/back-purple.png'
import restartButton from '../assets/restart-purple.png'

const refreshPage = () => {
    window.location.reload();
}

const leftAlign = {
    justifyContent: 'flex-end'
}

const NavButtons = (props) => {
        if (props.pageNumber === 0) {
            return (
                <div className="nav-buttons" style={leftAlign}>
                    <button onClick={() => props.setPageNumber(props.pageNumber +1)}><img className="navbutton-icon" src={forwardButton} alt="forward button" /></button>
                </div>
            )
        } else {
            return (
                <div className="nav-buttons">
                {props.pageNumber > 0 && props.pageNumber <= 9 && <button onClick={() => props.setPageNumber(props.pageNumber - 1)}><img className="navbutton-icon" src={backButton} alt="back button" /></button>}
                {props.pageNumber > 0 && props.pageNumber < 9 && <button onClick={() => props.setPageNumber(props.pageNumber +1)}><img className="navbutton-icon" src={forwardButton} alt="forward button" /></button>}
                {props.pageNumber === 9 && <button onClick={refreshPage}><img className="navbutton-icon" src={restartButton} alt="restart button" /></button>}
            </div>
            )
        }
}

export default NavButtons