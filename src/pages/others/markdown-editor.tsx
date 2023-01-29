import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import React, { Fragment, useState } from "react"
import tools from "../../utils/tools"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeHighlight from "rehype-highlight"
import remarkToc from "remark-toc"

const MarkdownEditor = () => {

  const router = useRouter()

  const tool = tools.find(tool => tool.id === router.pathname.split("/")[2])

  const [markdown, setMarkdown] = useState<string>(`# Your markdown here`)

  const _markdown = `
\`\`\`js
  import React from "react"
  import ReactDom from "react-dom"
  import ReactMarkdown from 'react-markdown'
  import MyFancyRule from './components/my-fancy-rule.js'

  ReactDOM.render(
    <ReactMarkdown
      components={{
        // Use h2s instead of h1s
        h1: 'h2',
        // Use a component instead of hrs
        hr: ({node, ...props}) => <MyFancyRule {...props} />
      }}
    >
      # Your markdown here
    </ReactMarkdown>,
    document.querySelector('#content')
  )
\`\`\`
  `

  return (
    <Fragment>
      <NextSeo
        title={tool?.name}
        description={tool?.description}
      />
      <main className="w-full grid grid-cols-1 lg:grid-cols-2">
        <section className="h-full max-h-full overflow-y-hidden overflow-x-hidden">
          <textarea 
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
            // Indent on tab press (4 spaces)
            onKeyDown={e => {
              if(e.key === "Tab"){
                e.preventDefault()
                const start = e.currentTarget.selectionStart
                const end = e.currentTarget.selectionEnd
                setMarkdown(markdown.substring(0, start) + "\t" + markdown.substring(end))
                e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + "\t".length
              }
            }}
            className="w-full h-full bg-slate-800 text-gray-50 p-4 resize-none" 
          />
        </section>
        <section className="h-full p-4 bg-white max-h-full overflow-y-auto overflow-x-hidden">
          <ReactMarkdown 
            className="markdown-container"
            remarkPlugins={[remarkGfm, remarkMath, remarkToc]}
            rehypePlugins={[rehypeKatex, rehypeHighlight]}
          >
            {markdown}
          </ReactMarkdown>
        </section>
      </main>
    </Fragment>
  )
}

export default MarkdownEditor