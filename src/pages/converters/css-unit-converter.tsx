import type {NextPage} from "next"
import {NextSeo} from "next-seo"
import {Router, useRouter} from "next/router"
import React, { Fragment, useState } from "react"
import tools from "../../utils/tools"

const initialValues = {
    pixels: 16,
    rem: 1
}

const CssUnitConverter:NextPage = () => {
    
    const tool = tools.find(tool => tool.id === "css-unit-converter")
    
    const [values, setValues] = useState(initialValues)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        const otherName = name === "pixels" ? "rem" : "pixels"
        const otherValue = name === "pixels" ? (Number(value) / 16).toFixed(3) : (Number(value) * 16).toFixed(0)
        setValues({
            ...values,
            [name]: value,
            [otherName]: otherValue
        })
    }

    return (
        <Fragment>
            <NextSeo
                title={`${tool?.name} | Dev ToolBox`}
                description={`${tool?.description}`}
             />
             <main className="grid gap-4 grid-flow-row grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl: grid-cols-12 grid rows-6 w-full">
                <section className="col-span-6 row-span-1 rounded-lg bg-base-100 p-4 shadow-md">
                    <h1 className="text-2xl font-semibold">CSS Unit Converter</h1>
                    <p>{`${tool?.description}`}</p>
                </section>
                <section className="col-span-6 row-span-6 flex flex-row gap-4 rounded-lg bg-base-100 p-4 shadow-md">
                    <label htmlFor="pixels">Pixels</label>
                    <input 
                        className="input input-bordered w-full"
                        type="number" 
                        name="pixels"
                        value={values.pixels}
                        onChange={handleChange}
                    />
                    <label htmlFor="rem">REM</label>
                    <input 
                        className="input input-bordered w-full"
                        type="number"
                        name="rem"
                        value={values.rem}
                        onChange={handleChange}
                    />
                </section>
             </main>
        </Fragment>
    )
}
export default CssUnitConverter