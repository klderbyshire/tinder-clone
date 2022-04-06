import { useState } from 'react';
import Nav from '../Nav/Nav.js';


const OnBoarding = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {
    return (
        <>
        <Nav
        minimal={true}
        setShowModal={() => {}} 
        showModal={false} 
        
        />
        <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
        <section>
            <label htmlFor="first_name">First Name</label>
            <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="First Name"
            required={true}
            value={""}
            onChange={handleChange}
            />
        </section>

        </form>

        </div>
        </>
    )
}

export default OnBoarding;