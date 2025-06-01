import { provinces, names } from "./data.js"


/**
 * Loops through arrays of names and provinces, logging each item to the console
 * Logs names with their matching provinces
 */
const forEachExercises = () => {
    console.log('ForEach Exercise\n')

    // Logs each name in the names array
    console.log('Names:')
    names.forEach(name => console.log(name))

    // Logs each province in the provinces array
    console.log('\nProvinces:')
    provinces.forEach(province => console.log(province))

    // logs name with corresponding province using the same index
    console.log('\nNames with matching provinces:')
names.forEach((name, index) => console.log(name + ` (${provinces[index]})`))
}

export default forEachExercises