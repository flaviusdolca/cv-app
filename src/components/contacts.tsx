import { FaEnvelope, FaPhone, FaMapMarked } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";

interface ContactsProps {
    email: string,
    phone: string,
    location: string
}

export default function Contacts({ email, phone, location }: ContactsProps) {
    return (<>
        <div className='my-2'>
            <FaEnvelope className='w-6 h-6 inline align-top mx-2' />
            <a href={"mailto:" + email} className='text-xl sm:text-2xl'>{email}</a>
        </div>
        <div className='my-2'>
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
    </>)
}