import { useTranslation } from "react-i18next";
import CvPage from "../components/cv/cvPage";
import CvHeader from "../components/cv/cvHeader";
import { getHomeTranslations } from "../utils/translationsHelper";
import PageLayout from "../components/layout/pageLayout";
import PageHeader from "../components/layout/pageHeader";
import { Meteors } from "../components/meteors/meteors";

export default function Home() {
  const { t } = useTranslation();
  const { headerLabels, cvPage } = getHomeTranslations(t);

  return (
    <>
      <div className="overflow-hidden">
        <PageHeader>
          <Meteors number={50}></Meteors>
          <CvHeader {...headerLabels} />
        </PageHeader>
      </div>
      <PageLayout>
        <CvPage {...cvPage} />
      </PageLayout>
    </>
  );
}
