import { type FC } from "react"
import { Oval } from "react-loader-spinner"

const Loading:FC = () => {
  return (
    <div className="bg-gray-300 bg-opacity-50 w-full h-full flex items-center justify-center">
        <Oval
            height={40}
            width={40}
            visible={true}
            color="#4fa94d"
            secondaryColor='#4fa94d'
            strokeWidth={4}
            strokeWidthSecondary={4}
        />
    </div>
  )
}

export default Loading