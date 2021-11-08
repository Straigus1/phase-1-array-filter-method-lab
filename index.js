function findMatching(array, string) {
    return array.filter((element) => {
        return element.toLowerCase().includes(string.toLowerCase())
    })

}
function fuzzyMatch(anArray, string) {
    return anArray.filter((element) => { 
        return element.indexOf(string)
        // We need to determine if the string variable matches the beginnigng of the element string
    })
}
function matchName(drivers, string)  {
    return drivers.filter(obj => obj.name === string)
}