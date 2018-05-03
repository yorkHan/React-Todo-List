export function save(key,value) {
    return window.localStorage.setItem(key,JSON.stringify(value))
}

export function loading(key) {
    return JSON.parse(window.localStorage.getItem(key))
}