import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    return (
        <>
            <div className='relative py-6 w-full flex flex-col items-center justify-center  bg-gradient-to-l from from-gray-800 to-gray-900 via-gray-900 text-gray-300'>
                <div className=' my-2'>
                    <h1 className='text-4xl font-semibold'>{t('labels.aboutMe')}</h1>
                </div>

            </div>
            <div className="flex flex-col pb-16  px-2 sm:px-8 sm:mx-8">
            <span className="pt-4 text-3xl uppercase border-b-2 border-gray-500">{"FAQ"}</span>
            </div>
        </>)
}