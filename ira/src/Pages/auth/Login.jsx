import React, { useState } from 'react'
import { IRA_LOGO } from '../../assets/index'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password);
        if (email === '') {
            toast.error(`Enter Email Address`)
        }
        else if (password === '') {
            toast.error(`Enter Email Password`)
        }
        else {
            navigate('/dashboard')
            toast.success(`Logged In Successfully`)
        }
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <div className={`signin_gradiant text-[#383336] font-quicksand`}>
                <div className={`px-2 sm:px-4 md:px-10 lg:px-4 xl:px-16`}>
                    <div className={`flex flex-col items-center justify-center h-[100dvh]`}>
                        <Link to="#">
                            <div className={`head space-y-1 md:space-y-0 md:flex md:items-center md:space-x-4`}>
                                <div className={`img rounded-[15px] p-2.5`}>
                                    <img src={IRA_LOGO} className={`w-20`} alt="ira_logo" />
                                </div>
                            </div>
                        </Link>
                        <form
                            onSubmit={handleLogin}
                            className={`w-[300px] max-w-[300px] min-w-[300px] sm:w-[400px] sm:max-w-[400px] sm:min-w-[400px] md:w-[450px] md:max-w-[450px] md:min-w-[450px] lg:w-[550px] lg:max-w-[450px]  lg:min-w-[450px] lg:p-[45px] bg-white sm:p-[30px] p-[25px] rounded-[10px] my-6 text-xs`}>
                            <h2 className={`text-[15px] font-bold md:text-xl text-center`}>Ira Admin Portal</h2>
                            <div className={`mt-8`}>
                                <div className={`mb-4`}>
                                    <label
                                        htmlFor="email"
                                        className={`block mb-2 text-sm text-[#383336] font-bold`}>Email {email === '' ? <span className={`text-red-400 transition-all duration-150 ease-in-out`}>*</span> : <span></span>}
                                    </label>
                                    <input
                                        type="email"
                                        className={`bg-[#F8F8F8] border-none focus:ring-2 focus:ring-[#383336] focus:border-none text-[#383336] text-[14px] rounded-[10px] font-semibold placeholder:text-[#979797] block w-full p-2.5 md:p-3 transition-all duration-500 ease-in-out`}
                                        placeholder="Enter Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e?.target?.value)}
                                        autoComplete="off" />
                                </div>
                                <div className={`mb-4`}>
                                    <label
                                        htmlFor="password"
                                        className={`block mb-2 text-sm text-[#383336] font-bold`}>Password {password === '' ? <span className={`text-red-400 transition-all duration-150 ease-in-out `}>*</span> : <span></span>}</label>
                                    <input
                                        type="password"
                                        className={`bg-[#F8F8F8] border-none focus:ring-2 focus:ring-[#383336] focus:border-none  text-[#383336] text-sm rounded-[10px] font-semibold placeholder:text-[#979797] block w-full p-2.5 md:p-3 transition-all duration-500 ease-in-out`}
                                        placeholder="Enter Your Password"
                                        value={password}
                                        onChange={(e) => setPassword(e?.target?.value)}
                                        autoComplete='off' />
                                </div>
                                <button
                                    type="submit"

                                    className={`bg-[#383336] text-[16px] font-semibold md:font-bold text-white w-[100%] rounded-[218px] sm:py-4 sm:px-4 p-3  gap-3 mt-5`}>Sign
                                    in</button>
                                <div className={`text-center mt-5 md:text-sm md:flex justify-center space-x-1`}>
                                    <span className={`font-semibold`}>Having issue in login?
                                    </span>
                                    <Link
                                        to=""
                                        className={`underline font-bold`}>Contact
                                        Support</Link>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login