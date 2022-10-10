import { useTranslation } from 'react-i18next';
import { SiLinkedin, SiGithub, SiJava } from 'react-icons/si'
import { FaEnvelope, FaPhone, FaArrowDown, FaArrowUp, FaMapMarked } from 'react-icons/fa'
export default function Home() {
    const { t } = useTranslation();

    const experiences: any = t('cv.experience', { returnObjects: true })
    const education: any = t('cv.education', { returnObjects: true })
    const skills: any = t('cv.professionalSkills', { returnObjects: true })
    const languages: any = t('cv.languages', { returnObjects: true })
    return (
        <>
            <div className='relative py-6 w-full flex flex-col items-center justify-center  bg-gradient-to-l from from-gray-800 to-gray-900 via-gray-900 text-gray-300'>
                <img alt="Flavius Dolca profile avatar" className='w-40 h-40 rounded-full' src='/me.jpeg' />
                <div className='h-6 my-2'>
                    <h1 className='text-4xl font-semibold'>{t('cv.personalInfo.name')}</h1>
                </div>
                <div className='my-4 w-full px-4 sm:w-1/2 text-center'>
                    <h1 className='text-xl font-thin'>{t('cv.description')}</h1>
                </div>
                <div className='h-6 my-2'>
                    <FaPhone className='w-6 h-6 inline align-top mx-2' />
                    <a href={"tel:" + t('cv.personalInfo.phone')} className='text-2xl'>{t('cv.personalInfo.phone')}</a>
                </div>
                <div className='my-2'>
                    <FaEnvelope className='w-6 h-6 inline align-top mx-2' />
                    <a href={"mailto:" + t('cv.personalInfo.email')} className='text-xl sm:text-2xl'>{t('cv.personalInfo.email')}</a>
                </div>
                <div className='my-2'>
                    <FaMapMarked className='w-6 h-6 inline align-top mx-2' />
                    <span className='text-xl sm:text-2xl'>{t('cv.personalInfo.location')}</span>
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
            </div>
            <div className="flex flex-col pb-16  px-2 sm:px-8 sm:mx-8 md:mx-20 xl:mx-64 bg-gray-300/80">

                <div id="skills" className='w-full flex flex-col justify-center py-4 mt-12'>

                    <span className="text-3xl uppercase border-b-2 border-gray-500">{t('labels.proSkills')}</span>

                    <ul className='my-2'>
                        <span className="text-xl font-medium uppercase">{t('labels.softSkills')}</span>
                        {skills.softSkills.map((skill: string, i: number) => (
                            <li className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0" key={i}>{skill}</li>
                        ))}
                    </ul>

                    <ul className='my-2'>
                        <span className="text-xl font-medium uppercase">{t('labels.techSkills')}</span>
                        {skills.techSkills.map((skill: string, i: number) => (
                            <li className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0" key={i}>{skill}</li>
                        ))}
                    </ul>

                </div>
                <div className='w-full flex flex-col'>
                    <span className="text-3xl uppercase border-b-2 border-gray-500">{t('labels.experience')}</span>
                    {experiences.map((el: any, i: number) => (
                        <div key={i} className='w-full flex flex-col justify-start py-4'>
                            <>
                                <span className="text-2xl font-medium" >
                                    {el.companyName}
                                </span>
                                <span className="text-xl font-medium">{el.occupation}</span>
                                <div key={i} className='flex flex-col sm:flex-row  sm:items-baseline'>
                                    <span className="text-lg font-medium">{el.city}</span>
                                    <span className="text-base pl-0 sm:pl-2 font-extralight" >{el.from} - {el.to}</span>
                                </div>
                                <ul>
                                    {el.descriptionList.map((desc: string, i: number) =>
                                    (
                                        <li className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0" key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </>
                        </div>
                    ))}
                </div>

                <div className='w-full flex flex-col'>
                    <span className="text-3xl uppercase border-b-2 border-gray-500">{t('labels.education')}</span>

                    {education.map((el: any, i: number) => (
                        <div key={i} className='w-full flex flex-col justify-start py-4'>
                            <>
                                <span className="text-xl font-medium">{el.schoolName}</span>
                                <span>{el.location + " " + el.data}</span>
                                <span>{el.description}</span>
                            </>
                        </div>
                    ))}
                </div>
                <div className='w-full flex flex-col justify-start py-4'>
                    <span className="text-3xl uppercase border-b-2 border-gray-500">{t('labels.languages')}</span>
                    <div className='flex'>
                        {languages.map((language: string, i: number) => (
                            <span className="text-base sm:text-lg font-medium px-2" key={i}>{language}</span>
                        ))}
                    </div>


                </div>


            </div>
            <div className='flex w-full justify-center p-8'>
                <a href="#" className='flex items-center justify-center h-16 w-16 bg-gradient-to-r from from-blue-900  to-red-900 rounded-full text-gray-300'><FaArrowUp className='transition animate-[bounce_1s_infinite] w-6 h-6' /></a>
            </div>
        </>
    )
}