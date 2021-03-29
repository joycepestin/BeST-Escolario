import React, { Fragment } from 'react'
import '../style.css'

const login = () => {
    return (
        <Fragment>
            <div className="header-img">
                <img src="Header-1.png"/>
            </div>

            <div className="form">
                <div className="tabContainer">
                    <div className="buttonContainer">
                        <button><b>LOG-IN</b></button>
                        <button><b>SIGN UP</b></button>
                    </div>
                </div>

                <div className="tab-content">
                    <div className="tab-body active">
                        <div className="form-element">
                            <input type="text" placeholder="Username" required />
                        </div>

                        <div className="form-element">
                            <input type="password" placeholder="Password" required />
                        </div>

                        <div className="form-element">
                            <button>LOG IN</button>

                            <div className="signup-link"><a href=""><b>Forgot Password?</b></a></div>

                        </div>
                    </div>

                    <div className="tab-body">
                        <div className="form-element">
                            <input type="text" placeholder="Name" required />
                        </div>

                        <div className="form-element">
                            <input type="text" placeholder="Email" required />
                        </div>

                        <div className="form-element">
                            <input type="password" placeholder="Password" required />
                        </div>

                        <div className="form-element">
                            <input type="confirm password" placeholder="Confirm Password" required />
                        </div>

                        <div className="form-element">
                            <button>SIGN UP</button>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default login
