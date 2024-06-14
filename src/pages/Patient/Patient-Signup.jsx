import React from 'react'
import logo from '../assets/logo.png'
import sickPatient from '../assets/sickPatient.png'

const PatientSignup = () => {
  return (
    <div>
        <div>
            <div>
                <img src= {logo} alt="logo" />
                <h3>HEALTH KEEP</h3>
            </div>
            
            <div>
                <p> Sign up to get started</p>

                <form>
                    <div>
                    <p>Full Name</p>
                    <input type="text" />
                    </div>

                    <div>
                        <p>Email</p>
                        <input type="email" />
                    </div>

                    <div>
                        <p>Date of Birth</p>
                        <input type="date" />
                    </div>

                    <div>
                        <p>Gender</p>
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div>
                        <p>Password</p>
                        <input type="password" />
                         <p>Great</p>
                         <p>Use a minimum of 8 characters with at least one number and special 
                            character (#!&$)
                        </p>
                    </div>

                    <input type="submit" value ="Sign up"/>

                    <p>Already have an account? 
                        <Link>
                        <button>Log in</button>
                        </Link>
                    </p>
                </form>
            </div>
        </div>

        <div>
            <img src={sickPatient} alt="sick patient " />
        </div>
    </div>
  )
}

export default PatientSignup