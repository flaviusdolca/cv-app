export default function MultiClassNames(...classnames: (string)[]) {
    return classnames.filter(Boolean).join(' ')

}