import { FaArrowDown } from 'react-icons/fa'
import PageTitle from '../pageTitle'
import Contacts from './contacts'

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
            <PageTitle title={name}></PageTitle>
            <div className='my-4 w-full px-4 sm:w-1/2 text-center'>
                <h2 className='text-xl font-thin'>{description}</h2>
            </div>
            <Contacts {...{ email, phone, location }} />
            <a href="#skills" className='flex items-center justify-center h-16 w-16 bg-gradient-to-r from from-blue-900  to-red-900 rounded-full absolute -bottom-8'><FaArrowDown className='transition animate-[bounce_1s_infinite] w-6 h-6' /></a>
        </>

    )
}