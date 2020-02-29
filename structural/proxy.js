  
function networkFetch(url) {
  return `${url} - Response from server`
}

const cache = new Set()
const proxyFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if (cache.has(url)) {
      return `${url} - Response from cash`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxyFetch('angular.io'))
console.log(proxyFetch('react.io'))
console.log(proxyFetch('angular.io'))