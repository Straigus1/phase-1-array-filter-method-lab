function findMatching(array, string) {
    return array.filter((element) => {
        return element.toLowerCase().includes(string.toLowerCase())
    })

}
function fuzzyMatch(anArray, string) {
    return anArray.filter((element) => { 
        return element.includes(string.charAt(1))
    })
}
function matchName(drivers, string)  {
    drivers.filter(obj => obj.name === string)
}