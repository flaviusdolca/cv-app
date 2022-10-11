import { useTranslation } from 'react-i18next';
import CvPage from '../components/cvPage';
import CvHeader from '../components/cvHeader';
import { getHomeTranslations } from '../utils/translationsHelper';

export default function Home() {
    const { t } = useTranslation();
    const { headerLabels, cvPage } = getHomeTranslations(t)

    return (
        <>
            <CvHeader {...headerLabels} />
            <CvPage {...cvPage} />
        </>
    )
}