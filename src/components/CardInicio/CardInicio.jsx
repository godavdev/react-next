import Link from "next/link"

const CardInicio = ({ title, link, children }) => {
    return (
        <div className="w-[24%] aspect-[10/12] flex flex-col bg-white border-4 p-4">
            <div className="text-xl font-bold">
                {title}
            </div>
            <div className="w-full flex-1 p-4">
                {children}
            </div>
            <Link href={link} className="text-blue-800">
                See more about...
            </Link>
        </div>
    )
}

export default CardInicio