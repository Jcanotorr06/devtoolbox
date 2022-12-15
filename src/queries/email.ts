import { type QueryFunction } from "@tanstack/react-query";
import type { Mailbox, MailboxMessage } from "../types/mailbox";
import { getDecodedLocalStorage, setEncodedLocalStorage } from './../utils/storage';

const url = "https://www.1secmail.com/api/v1/"


export const getEmailAddress:QueryFunction<string[]|null> = async () => {
    const response = await fetch(url + "?action=genRandomMailbox")
    .then(response => response.json())
    .then(data => data) as string[]
    
    if (!response[0]) return null
    // await setEncodedLocalStorage("email", response[0])

    return response
}

export const getMailbox:QueryFunction<Mailbox[]|null, [string,string|null|undefined]> = async ({queryKey}) => {
    const email = queryKey[1]
    if (!email) return null
    const [login, domain] = email.split("@")

    const response = await fetch(url + "?action=getMessages&login=" + login + "&domain=" + domain)
    .then(response => response.json())
    .then(data => data) as Mailbox[]

    return response
}

export const getMailboxMessage:QueryFunction<MailboxMessage|null, [string, string|null|undefined, number|null|undefined]> = async ({queryKey}) => {
    const email = queryKey[1]
    const id = queryKey[2]
    if (!email || !id) return null
    const [login, domain] = email.split("@")

    const response = await fetch(url + "?action=readMessage&login=" + login + "&domain=" + domain + "&id=" + id)
    .then(response => response.json())
    .then(data => data) as MailboxMessage

    console.log("Mailbox Message: ", response)

    return response
}