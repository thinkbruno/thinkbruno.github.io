import cvPt from '@/assets/files/cv-pt.pdf'
import cvEn from '@/assets/files/cv-en.pdf'
import cvEs from '@/assets/files/cv-es.pdf'

export const getCvLink = (lang) => {
    switch (lang) {
        case 'en':
            return cvEn
        case 'es':
            return cvEs
        default:
            return cvPt
    }
}