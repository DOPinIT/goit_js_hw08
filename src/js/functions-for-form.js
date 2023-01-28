
export function onInput({ target }) {
    if (target || textarea !== "") {
        localStorage.setItem("userEmail", target.value)
        localStorage.getItem("userEmail")
    }
}
export function onTextArea({target}) {
    if (target || textarea !== "") {
        localStorage.setItem("textArea", target.value)
        localStorage.getItem("textArea")
    }
}