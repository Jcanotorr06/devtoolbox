import { type FC, Fragment } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getEmailAddress, getMailbox } from '../../queries/email'
import Loading from '../utils/Loading'
import { HiEnvelopeOpen } from 'react-icons/hi2'
import * as dayjs from "dayjs"
import Message from './Message'
import useEmailStore from '../../state/emailStore'

const Inbox:FC = () => {

    const fetchEmail = useQuery(["email"], getEmailAddress,{
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false
    })
    
    const emailAddress = fetchEmail.data && fetchEmail.data[0]

    const { data, isLoading, isError, isRefetching, isRefetchError } = useQuery(["mailbox", emailAddress], getMailbox, {
        enabled: !!emailAddress,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    })

    return (
        <Fragment>
            <div className="flex flex-col h-full w-full">
                {
                    isLoading || isRefetching ? <Loading/> : 
                    isError || isRefetchError ? "Error" : 
                    (data && data.length > 0) ?
                        data?.map((email, i) => (
                            <Fragment key={i}>
                                <Message email={email}/>
                            </Fragment>
                        )):
                    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-2">
                        <div>
                            <HiEnvelopeOpen className="text-8xl text-secondary" />
                        </div>
                        <div>
                            <p className="text-2xl">
                                Your inbox is empty
                            </p>
                        </div>
                        <div>
                            <p className="text-base text-secondary">
                                Waiting for new messages
                            </p>
                        </div>
                    </div>
                }
            </div>
        </Fragment>
    )
}

export default Inbox