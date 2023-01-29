import { type NextPage } from "next"
import { useRouter } from "next/router";
import { Fragment } from "react";
import { NextSeo } from "next-seo";
import tools from "../../utils/tools";

const JWTDebugger:NextPage = () => {
  const router = useRouter()
  const tool = tools.find(tool => tool.id === router.pathname.split("/")[2])

  return (
    <Fragment>
      <NextSeo
        title={`${tool?.name} | Dev Toolbox`}
        description={tool?.description}
      />
      <main className="grid gap-4 grid-flow-row grid-cols-12 grid-rows-6 w-full">
        <div className="col-span-full row-span-1 bg-base-100 p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold">JWT Debugger</h1>
        </div>
      </main>
    </Fragment>
  )
}

export default JWTDebugger