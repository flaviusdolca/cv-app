import Education, { EducationT } from "./education"
import Experience, { ExperienceT } from "./experience"
import Languages from "./languages"
import ProfessionalSkills, { ProfessionalSkillslabelsT, ProfessionalSkillsT } from "./professionalSkills"

export interface CvPageProps {
    professionalSkills: ProfessionalSkillsT,
    experiences: ExperienceT[],
    education: EducationT[],
    languages: string[],
    cvPageLabels: {
        skillsLabels: ProfessionalSkillslabelsT,
        experienceLabel: string,
        educationLabel: string,
        languagesLabel: string
    }
}
export default function CvPage({ ...cvPage }: CvPageProps) {
    const { cvPageLabels, professionalSkills, experiences, education, languages } = cvPage
    return <>
        <ProfessionalSkills skills={professionalSkills} labels={cvPageLabels.skillsLabels} />
        <Experience experiences={experiences} expLabel={cvPageLabels.experienceLabel} />
        <Education education={education} educationLabel={cvPageLabels.educationLabel} />
        <Languages languages={languages} languagesLabel={cvPageLabels.languagesLabel} />
    </>
}