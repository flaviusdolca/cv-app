import { TFunction } from "i18next"
import { CvPageProps } from "../components/cvPage"
import { EducationT } from "../components/education"
import { ExperienceT } from "../components/experience"
import { ProfessionalSkillsT } from "../components/professionalSkills"


export function getHomeTranslations(t: TFunction) {
    const headerLabels = {
        name: t('cv.personalInfo.name'),
        description: t('cv.description'),
        email: t('cv.personalInfo.email'),
        phone: t('cv.personalInfo.phone'),
        location: t('cv.personalInfo.location')
    }

    const professionalSkills: ProfessionalSkillsT = t('cv.professionalSkills', { returnObjects: true })
    const skillsLabels = {
        proSkills: t('labels.proSkills'),
        softSkills: t('labels.softSkills'),
        techSkills: t('labels.techSkills')
    }

    const experiences: ExperienceT[] = t('cv.experience', { returnObjects: true })
    const experienceLabel = t('labels.experience')

    const education: EducationT[] = t('cv.education', { returnObjects: true })
    const educationLabel = t('labels.education')

    const languagesLabel = t('labels.languages')
    const languages: string[] = t('cv.languages', { returnObjects: true })

    const cvPage: CvPageProps = {
        professionalSkills,
        experiences,
        education,
        languages,
        cvPageLabels: {
            skillsLabels,
            experienceLabel,
            educationLabel,
            languagesLabel
        }
    }
    return { headerLabels, cvPage }
}