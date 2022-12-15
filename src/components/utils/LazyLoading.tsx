import { type FC, Suspense } from "react"
import Loading from "./Loading"
 
type Props = {
    children: React.ReactNode
}

const LazyLoading:FC<Props> = ({ children }:Props) => {

    return (
        <Suspense fallback={<Loading/>}>
            {children}
        </Suspense>
    )
}

export default LazyLoading