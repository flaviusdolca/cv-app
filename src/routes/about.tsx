import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    const faqs: any = t('aboutMe.faq', { returnObjects: true })
    return (
        <>
            <div className='relative py-6 w-full flex flex-col items-center justify-center  bg-gradient-to-l from from-gray-800 to-gray-900 via-gray-900 text-gray-300'>
                <div className=' my-2'>
                    <h1 className='text-4xl font-semibold'>{t('labels.aboutMe')}</h1>
                </div>

            </div>
            <div className="flex flex-col pb-16  px-2 sm:px-8 sm:mx-8">
                <span className="pt-4 text-3xl uppercase border-b-2 border-gray-500">{"Introduction"}</span>
                <span className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0" >{t('aboutMe.description')}</span>
                <span className="pt-4 text-3xl uppercase border-b-2 border-gray-500">{t('labels.faq')}</span>
                {faqs.map((faq: any, i: number) => (
                    <ul key={i} className='my-2'>
                        <li className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0">{faq.question}</li>
                        <li className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0">{faq.answer}</li>
                    </ul>
                ))}
            </div>
        </>)
}