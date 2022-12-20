import type { FC } from "react"
import type { Mailbox } from "../../types/mailbox"
import * as dayjs from "dayjs"
import useEmailStore from "../../state/emailStore"

type Props = {
    email: Mailbox
}

const Message:FC<Props> = ({ email }:Props) => {

    const { openEmail } = useEmailStore()

    return (
        <article className="w-full p-4 hover:bg-primary hover:bg-opacity-10 hover:cursor-pointer" onClick={() => {openEmail(email)}}>
            <section className="flex items-center gap-2">
                <div className="avatar placeholder">
                    <div className="bg-secondary text-neutral-content rounded-full w-12">
                        <span>{email.from.slice(0,2)}</span>
                    </div>
                </div>
                <div className="flex justify-between flex-1">
                    <div>
                        <p className="font-medium">{email.from}</p>
                    </div>
                    <div>
                        <p className="text-sm">{
                            dayjs.default(email.date).format("HH:mm, MMM DD, YYYY")
                        }</p>
                    </div>
                </div>
            </section>
            <section className="py-2">
                <span>Subject: </span>
                <span className="font-medium">{email.subject}</span>
            </section>
        </article>
    )
}

export default Message