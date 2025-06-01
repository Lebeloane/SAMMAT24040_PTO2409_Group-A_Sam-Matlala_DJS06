import { names, provinces } from './data.js'

/**
 * Functions performed:
 * Transforms province names to uppercase
 * Maps names to objects containing their length
 * Maps names to objects indicating if the contain the leter 'S'
 */
export const mapExercises = () => {
    console.log('Map Exercise, Uppercase Transformation\n')
    // Transform each province name to uppercase
    const upperCaseProvinces = provinces.map(province => province.toUpperCase())
    console.log(upperCaseProvinces)

    console.log('\nName Lengths\n')
    // Map each name to an object with its length
    const nameLength = names.map(name => ({
        name,
        length: name.length
    }))
    console.log(nameLength)

    console.log('\n Names containing the letter "S"\n')
    // 3. Map each name to an object indicating if it contains the letter "S"
    const containsLetter_S = names.map(name => ({
        name,
        containsLetter_S: name.includes('S')
    }))
    console.log(containsLetter_S)
}

export default mapExercises