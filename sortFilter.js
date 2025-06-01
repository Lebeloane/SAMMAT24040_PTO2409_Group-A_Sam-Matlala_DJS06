import { provinces } from "./data.js"

/**
 * Sorts the list of provinces in alphabetical order
 * Filters out provinces that contain the word 'Cape'
 */
const sortFilterExercises = () => {
    console.log('Alphabetically Sorted Provinces\n')
    const alphabeticallySortedProvinces = [...provinces].sort()
    console.log(alphabeticallySortedProvinces)

    console.log('\nFiltering Cape Provinces\n')
    const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'))
    console.log(nonCapeProvinces)
    console.log(`\nRemaining count of provinces ${nonCapeProvinces.length}`)
}

export default sortFilterExercises