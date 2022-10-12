import { useTranslation } from 'react-i18next';
import CvPage from '../components/cvPage';
import CvHeader from '../components/cvHeader';
import { getHomeTranslations } from '../utils/translationsHelper';
import PageLayout from '../components/pageLayout';
import PageHeader from '../components/pageHeader';

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