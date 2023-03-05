import { useState, useEffect } from 'react';

const HeaderNav = () => {

    const [dropDownProjects, setDropDownProjects] = useState(false);
    const [dropDownAbout, setDropDownAbout] = useState(false);

    return (
        <header className='container mx-auto my-0 flex justify-between items-center p-4 bg-slate-300'>
            <button>Roald M. Dela Cruz</button>
            <ul className='flex justify-start items-center gap-4 z-10'>
                <li className='relative z-10' onClick={() => setDropDownProjects(true)} onMouseOver={() => setDropDownProjects(true)} onMouseLeave={() => { setDropDownProjects(false) }}>
                    <button>Projects</button>
                    <ul className={`${dropDownProjects ? 'flex' : 'hidden'} justify-start items-start flex-col bg-slate-200 absolute top-6 right-0 p-2 rounded shadow-slate-400 shadow-md`}>
                        <figcaption className='p-1 w-[400px] font-semibold underline text-sm'>MySQL Express React NodeJS</figcaption>
                        <li className='p-1 w-fit'><a className='hover:bg-[#0003] p-1 hover:underline underline-offset-8' target={'_blank'} referrerPolicy={'no-referrer'} href="https://tinyurl.com/2ebdehvt">NodeJS/MySQL/ExpressJS CRUD REST API</a></li>
                        <li className='p-1 w-fit'><a className='hover:bg-[#0003] p-1 hover:underline underline-offset-8' target={'_blank'} referrerPolicy={'no-referrer'} href="https://tinyurl.com/w5up88yf">CRUD React</a></li>
                        <li className='p-1 w-fit'><a className='hover:bg-[#0003] p-1 hover:underline underline-offset-8' target={'_blank'} referrerPolicy={'no-referrer'} href="https://tinyurl.com/4ukemfvr">SignIn/SignUp Project</a></li>
                        <figcaption className='p-1 w-[260px] font-semibold underline text-sm'>PHP Javascript/JQuery HTML/CSS</figcaption>
                        <li className='p-1 w-fit'><a className='hover:bg-[#0003] p-1 hover:underline underline-offset-8' target={'_blank'} referrerPolicy={'no-referrer'} href="https://tinyurl.com/5bszyt9d">PHP/MySQL CRUD</a></li>
                        <li className='p-1 w-fit'><a className='hover:bg-[#0003] p-1 hover:underline underline-offset-8' target={'_blank'} referrerPolicy={'no-referrer'} href="https://tinyurl.com/3dw878wb">PHP REST API</a></li>
                    </ul>
                </li>
                <li className='relative z-10' onClick={() => setDropDownAbout(true)} onMouseOver={() => setDropDownAbout(true)} onMouseLeave={() => { setDropDownAbout(false) }}>
                    <button>About</button>
                    <ul className={`${dropDownAbout ? 'flex' : 'hidden'}  justify-start items-start flex-col bg-slate-200 absolute top-6 right-0 p-2 rounded shadow-slate-400 shadow-md`}>
                        <figcaption className='p-1 w-[200px] font-semibold underline'>Profile</figcaption>
                        <li className='p-1'><a target={'_blank'} referrerPolicy={'no-referrer'} href="https://tinyurl.com/53y4hubc">Github</a></li>
                        <figcaption className='p-1 w-[300px] font-semibold underline'>Contact</figcaption>
                        <li className='p-1 underline'>📧 roalddelacruz@gmail.com</li>
                        <li className='p-1'>📱+63-992-574-4271</li>
                        <figcaption className='p-1 w-[200px] font-semibold underline'>Hire Me</figcaption>
                        <li className='p-1'>Indeed</li>
                    </ul>
                </li>

            </ul>
        </header>
    )
}

export default HeaderNav