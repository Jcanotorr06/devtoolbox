export type Mailbox = {
    id: number,
    from: string,
    subject: string,
    date: string,
}

export type MailboxMessage = {
    id: number,
    from: string,
    subject: string,
    date: string,
    attachments: MailboxMessageAttachment[],
    body: string,
    textBody: string,
    htmlBody: string,
}

export type MailboxMessageAttachment = {
    filename: string,
    contentType: string,
    size: number,
}