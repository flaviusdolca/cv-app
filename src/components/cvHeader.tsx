import { SiLinkedin, SiGithub } from 'react-icons/si'
import { FaEnvelope, FaPhone, FaArrowDown, FaMapMarked } from 'react-icons/fa'

export interface CvHeaderLabels {
    name: string,
    description: string,
    email: string,
    phone: string,
    location: string

}
export default function CvHeader({ ...labels }: CvHeaderLabels) {
    const { name, description, email, phone, location } = labels
    return (
            <>
                <img alt="Flavius Dolca profile avatar" className='w-40 h-40 rounded-full' src='/me.jpeg' />
                <div className='h-6 my-2'>
                    <h1 className='text-4xl font-semibold'>{name}</h1>
                </div>
                <div className='my-4 w-full px-4 sm:w-1/2 text-center'>
                    <h1 className='text-xl font-thin'>{description}</h1>
                </div>
                <div className='my-2'>
                    <FaEnvelope className='w-6 h-6 inline align-top mx-2' />
                    <a href={"mailto:" + email} className='text-xl sm:text-2xl'>{email}</a>
                </div>
                <div className='h-6 my-2'>
                    <FaPhone className='w-6 h-6 inline align-top mx-2' />
                    <a href={"tel:" + phone} className='text-2xl'>{phone}</a>
                </div>
                <div className='my-2'>
                    <FaMapMarked className='w-6 h-6 inline align-top mx-2' />
                    <span className='text-xl sm:text-2xl'>{location}</span>
                </div>
                <a className="block my-2 " href="https://www.linkedin.com/in/flavius-dolca-18b09b150/">
                    <SiLinkedin className='w-6 h-6 inline align-top text-blue-600 mx-2' />
                    <span className='text-xl'>LinkedIn</span>
                </a>
                <a className="block my-2 mb-6" href="https://github.com/flaviusdolca">
                    <SiGithub className='w-6 h-6 inline align-top mx-2' />
                    <span className='text-xl'>GitHub</span>
                </a>
                <a href="#skills" className='flex items-center justify-center h-16 w-16 bg-gradient-to-r from from-blue-900  to-red-900 rounded-full absolute -bottom-8'><FaArrowDown className='transition animate-[bounce_1s_infinite] w-6 h-6' /></a>
            </>

    )
}