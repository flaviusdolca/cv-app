export default function PageTitle({ title }: { title: string }) {
    return (
        <div className=' my-2'>
            <h1 className='text-4xl font-semibold'>{title}</h1>
        </div>
    )

}