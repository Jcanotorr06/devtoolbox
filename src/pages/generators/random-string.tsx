import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { HiDocumentArrowDown } from "react-icons/hi2"
import { FaCopy } from "react-icons/fa"
import tools from "../../utils/tools"
import { randomStrings } from "../../utils/generators"
import useAlertStore from "../../state/alertStore"

const RandomString:NextPage = () => {
  const router = useRouter()
  const { openAlert } = useAlertStore()

  const tool = tools.find(tool => tool.id === router.pathname.split("/")[2])

  const [length, setLength] = useState(20)
  const [count, setCount] = useState(4)
  const [separator, setSeparator] = useState("\n")
  const [lowercase, setLowercase] = useState(true)
  const [uppercase, setUppercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [string, setString] = useState("")
  const [strings, setStrings] = useState<string[]>([])

  const handleGenerate = () => {
    const string = randomStrings(length, count, lowercase, separator, uppercase, numbers, symbols)
    setString(string)
    setStrings([...strings, string])
  }

  const handleClear = () => {
    setString("")
    setStrings([])
  }

  const handleCopy = () => {
    if(navigator && string !== ""){
      navigator.clipboard.writeText(string)
      openAlert("String copied to clipboard", "info")
    }
  }

  const handleDownload = () => {
    if(document){
      const element = document.createElement("a")
      const file = new Blob([string], {type: "text/plain"})
      element.href = URL.createObjectURL(file)
      element.download = "random-strings.txt"
      document.body.appendChild(element)
      element.click()
      element.remove()
    }
  }

  
  return (
    <Fragment>
      <NextSeo
        title={`${tool?.name} | Dev Toolbox`}
        description={tool?.description}
      />
      <main className="grid gap-4 grid-flow-row grid-cols-12 grid-rows-6 w-full">
        <section className="col-span-5 row-span-1 flex flex-col gap-4 rounded-lg bg-base-100 p-4 shadow-md">
          <h1 className="text-2xl font-semibold">Random String Generator</h1>
          <p>
            Generate random strings of any length, with any character set.
          </p>
        </section>
        <section className="col-span-7 row-span-6 flex flex-col gap-4 rounded-lg bg-base-100 p-4 shadow-md">
          <h1 className="text-2xl font-semibold">Generated Strings</h1>
          <div className="flex-1">
            <textarea 
              className="w-full h-full textarea caret-transparent bg-base-200 rounded-lg p-4 cursor-copy disabled:cursor-copy resize-none decoration-transparent" 
              value={string}
              onClick={handleCopy}
            />
          </div>
          <div className="flex flex-wrap justify-between">
            <article className="btn-group rounded-md">
              <button className="btn btn-error rounded-lg" onClick={handleClear}>
                Clear
              </button>
              <button className="btn btn-success rounded-lg" onClick={handleGenerate}>
                Generate
              </button>
            </article>
            <article className="btn-group">
              <div className="tooltip" data-tip="Copy">
                <button className="btn btn-primary text-lg" onClick={handleCopy}>
                  <FaCopy/>
                </button>
              </div>
              <div className="tootltip" data-tip="Download">
                <button className="btn btn-secondary text-lg" onClick={handleDownload}>
                  <HiDocumentArrowDown/>
                </button>
              </div>
            </article>
          </div>
        </section>
        <section className="col-span-5 row-span-5 flex flex-col gap-4 rounded-lg bg-base-100 p-4 shadow-md">
          <h1 className="text-2xl font-semibold">Options</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Length</label>
              <input
                className="input input-bordered w-full"
                type="number"
                value={length}
                onChange={e => setLength(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Count</label>
              <input
                className="input input-bordered w-full"
                type="number"
                value={count}
                onChange={e => setCount(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Separator</label>
              <input
                className="input input-bordered w-full"
                type="text"
                value={separator}
                onChange={e => setSeparator(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Lowercase</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={lowercase}
                  onChange={e => setLowercase(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Uppercase</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={uppercase}
                  onChange={e => setUppercase(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Numbers</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={numbers}
                  onChange={e => setNumbers(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Symbols</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={symbols}
                  onChange={e => setSymbols(e.target.checked)}
                />
              </label>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default RandomString