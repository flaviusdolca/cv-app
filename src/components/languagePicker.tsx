import { useTranslation } from 'react-i18next';
type i18nLanguages = Record<string, { nativeName: string }>
const lngs: i18nLanguages = {
    en: { nativeName: 'EN' },
    it: { nativeName: 'IT' }
};
export default function LnaguagePicker() {
    const { i18n } = useTranslation();

    return (
        <select className='mx-2 bg-gray-800 px-2 text-lg' value={i18n.resolvedLanguage} onChange={(e) => i18n.changeLanguage(e.target.value)}>
            {Object.keys(lngs).map((lng) => (
                <option className={(i18n.resolvedLanguage === lng ? 'font-bold' : 'font-normal')} key={lng} value={lng} >
                    {lngs[lng].nativeName}
                </option>
            ))}
        </select>
    )
}