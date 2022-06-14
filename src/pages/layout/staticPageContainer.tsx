export default function StaticPageContainer({ children }: any) {
    return (
        <div className='space-y-12 md:text-lg text-justify bg-indigo-800 text-white p-8 md:px-16 lg:p-16'>
            {children}
        </div>
    )
}