import { type FC, Fragment } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FaCopy } from "react-icons/fa"
import { getEmailAddress } from '../../queries/email'
import useAlertStore from '../../state/alertStore'

const Address:FC = () => {

    const { data, isLoading, isError, isRefetching, isRefetchError } = useQuery(["email"], getEmailAddress,{
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false
    })
    
    const { openAlert } = useAlertStore()

    const emailAddress = data && data[0]

    const handleCopy = () => {
        if (emailAddress) {
            navigator.clipboard.writeText(emailAddress)
            openAlert("Email address copied to clipboard", "info")
        }
    }

    return (
      <Fragment>
        <div className="prose">
          <h2>Your temporary email address</h2>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 border border-primary rounded-md border-dashed p-2">
            <span className="text-lg">
              {isLoading || isRefetching
                ? "Loading..."
                : isError || isRefetchError
                ? "Error"
                : emailAddress}
            </span>
          </div>
          <div className="tooltip" data-tip="Copy to clipboard">
            <button onClick={handleCopy} className="btn-primary btn-circle btn" disabled={!emailAddress}>
              <FaCopy />
            </button>
          </div>
        </div>
      </Fragment>
    );
}

export default Address