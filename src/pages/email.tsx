import { type NextPage } from "next";
import { NextSeo } from "next-seo";
import { Fragment } from "react";
import { MessageDetails, Address, Inbox } from "../components/Email";

const Email:NextPage = () => {

    return (
        <Fragment>
            <NextSeo
                title="Temporary Email | Dev Toolbox"
                description="Disposable Temporary Email Address"
            />
            <main className="grid gap-4 grid-flow-row grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 grid-rows-6 w-full">
                <section className="col-span-5 row-span-1 flex flex-col gap-4 rounded-lg bg-base-100 p-4 shadow-md">
                    <Address/>
                </section>
                    <MessageDetails/>
                <section className="bg-base-100 row-span-5 shadow-md rounded-lg col-span-5 row-start-2">
                    <Inbox/>
                </section>
            </main>
        </Fragment>
    )
}

export default Email