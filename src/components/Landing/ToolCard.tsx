import { type FC } from 'react'
import Link from 'next/link'

type Props = {
    name: string,
    description: string,
    category: string,
    link: string
}

const ToolCard:FC<Props> = (props:Props) => {
    const { name, description, category, link } = props

    return (
        <article className="rounded-lg col-span-full lg:col-span-6 xl:col-span-3 row-span-1 p-4 bg-base-100 shadow-md grid grid-cols-4 grid-rows-3">
            <div className="col-span-4 row-span-2 gap-2">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p>{description}</p>
            </div>
            <div className="col-span-4 row-span-1">
                <Link href={`${category}/${link}`} className="btn btn-primary rounded-lg w-full">
                    <span>Use</span>
                </Link>
            </div>
        </article>
    )
}

export default ToolCard