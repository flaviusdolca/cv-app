import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/pageHeader';
import PageLayout from '../components/layout/pageLayout';
import PageTitle from '../components/pageTitle';

interface FaqT {
    question: string,
    answer: string
}

export default function About() {
    const { t } = useTranslation();
    const faqs: FaqT[] = t('aboutMe.faq', { returnObjects: true })
    return (
        <>
            <PageHeader>
                <PageTitle title={t('labels.aboutMe')}></PageTitle>
            </PageHeader>
            <PageLayout>
                <>
                    <span className="pt-4 text-3xl uppercase border-b-2 border-gray-500">{"Introduction"}</span>
                    <span className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0" >{t('aboutMe.description')}</span>
                    <span className="pt-4 text-3xl uppercase border-b-2 border-gray-500">{t('labels.faq')}</span>
                    {faqs.map((faq: FaqT, i: number) => (
                        <ul key={i} className='my-2'>
                            <li className="text-lg sm:text-xl font-medium sm:pl-8 sm:leading-7 py-1 sm:py-0">{faq.question}</li>
                            <li className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0">{faq.answer}</li>
                        </ul>
                    ))}
                </>
            </PageLayout>

        </>)
}