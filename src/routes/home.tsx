import { useTranslation } from 'react-i18next';
import CvPage from '../components/cv/cvPage';
import CvHeader from '../components/cv/cvHeader';
import { getHomeTranslations } from '../utils/translationsHelper';
import PageLayout from '../components/layout/pageLayout';
import PageHeader from '../components/layout/pageHeader';

export default function Home() {
    const { t } = useTranslation();
    const { headerLabels, cvPage } = getHomeTranslations(t)

    return (
        <>
            <PageHeader>
                <CvHeader {...headerLabels} />
            </PageHeader>
            <PageLayout>
                <CvPage {...cvPage} />
            </PageLayout>
        </>
    )
}