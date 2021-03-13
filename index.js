let machineAbstraite = (fn, ...args) => {
    fn(...args)
}

let print = (x) => console.log(x)

machineAbstraite(print, 'hoge')
