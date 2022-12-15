
export const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}

export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
    localStorage.clear()
}

export const setSessionStorage = (key: string, value: string) => {
    sessionStorage.setItem(key, value)
}

export const getSessionStorage = (key: string) => {
    return sessionStorage.getItem(key)
}

export const removeSessionStorage = (key: string) => {
    sessionStorage.removeItem(key)
}

export const clearSessionStorage = () => {
    sessionStorage.clear()
}

export const encode = async (str: string) => {
    const base64 = await import("crypto-js/enc-base64")
    const hex = await import("crypto-js/enc-hex")

    return hex.stringify(base64.parse(str))
}

export const decode = async (str: string) => {
    const base64 = await import("crypto-js/enc-base64")
    const hex = await import("crypto-js/enc-hex")

    return base64.stringify(hex.parse(str))
}

export const setEncodedLocalStorage = async (key: string, value: string) => {
    const encoded = await encode(value)
    localStorage.setItem(key, encoded)
}

export const getDecodedLocalStorage = async (key: string) => {
    const encoded = localStorage.getItem(key)
    if (!encoded) return null
    const decoded = await decode(encoded)
    return decoded
}

export const setEncodedSessionStorage = async (key: string, value: string) => {
    const encoded = await encode(value)
    sessionStorage.setItem(key, encoded)
}

export const getDecodedSessionStorage = async (key: string) => {
    const encoded = sessionStorage.getItem(key)
    if (!encoded) return null
    const decoded = await decode(encoded)
    return decoded
}