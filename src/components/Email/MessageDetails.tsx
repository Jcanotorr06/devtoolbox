import { useQuery } from "@tanstack/react-query"
import { Interweave } from "interweave"
import { type FC } from "react"
import { FaFileDownload, FaTimes } from "react-icons/fa"
import * as dayjs from "dayjs"
import { getEmailAddress, getMailboxMessage } from "../../queries/email"
import useEmailStore from "../../state/emailStore"
import Loading from "../utils/Loading"
import type { Mailbox, MailboxMessageAttachment } from "../../types/mailbox"

const MessageDetails:FC = () => {
  const { email, closeEmail } = useEmailStore()
  const fetchEmail = useQuery(["email"], getEmailAddress,{
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false
  })

  const emailAddress = fetchEmail.data && fetchEmail.data[0]

  const { data, isLoading, isError } = useQuery(["details", emailAddress ,email?.id], getMailboxMessage, {
    enabled: !!email && !!emailAddress,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const handleDonwload = (email:Mailbox, emailAddress:string, attachment:MailboxMessageAttachment) => {
    const link = document.createElement("a")
    link.href = `https://www.1secmail.com/api/v1/?action=download&login=${emailAddress.split("@")[0]}&domain=${emailAddress.split("@")[1]}&id=${email.id}&file=${attachment.filename}`
    link.download = attachment.filename
    link.target="_blank"
    link.rel="noopener noreferrer"
    link.click()
    link.remove()
  }

  return (
    <section className="bg-base-100 row-span-6 shadow-md rounded-lg col-span-7 overflow-y-auto overflow-x-hidden">
      {
        (email && emailAddress) ? 
        isLoading ? <Loading/> :
        isError ? "There Was an Error" :
        data && (
          <div className="flex flex-col h-full w-full p-4 gap-2">
           <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-medium">
                {data.subject}
              </h1>
            </div>
            <div>
              <button className="btn btn-circle btn-ghost" onClick={closeEmail}>
                <FaTimes/>
              </button>
            </div>
           </div>
           <div className="flex items-center gap-2">
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
           </div>
           <div className="divider"></div>
            <div>
              <Interweave
                content={data.body}
              />
            </div>
            {
              data.attachments && data.attachments.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {
                    data.attachments.map((attachment, index) => (
                      <article 
                        key={index} 
                        onClick={() => {handleDonwload(email, emailAddress, attachment)}}
                        className="bg-base-100 border shadow-sm rounded-md p-4 flex gap-2 items-center hover:cursor-pointer hover:border-primary select-none" 
                      >
                        <div>
                          <h5>
                            {attachment.filename}
                          </h5>
                          <p>
                            {attachment.contentType.split("/")[1]?.toUpperCase() || "Unknown"}
                            •
                            {attachment.size > 1000000 ? `${(attachment.size / 1000000).toFixed(2)} MB` : `${(attachment.size / 1000).toFixed(2)} KB`}
                          </p>
                        </div>
                        <div>
                          <button className="p-4 text-primary text-xl">
                            <FaFileDownload/>
                          </button>
                        </div>
                      </article>
                    ))
                  }
                </div>
              )
            }
          </div>
        ):
        <div className="w-full h-full flex flex-col items-center justify-center text-center gap-2">
          <div>
            <p className="text-2xl">
              No Email Selected
            </p>
          </div>
          <div>
            <p className="text-base text-secondary">
              Select an email to view
            </p>
          </div>
        </div>
      }
    </section>
  )
}

export default MessageDetails