import { names, provinces } from './data.js';

const reduceExercises = () => {
    console.log('Name-Province Mapping\n');

    const nameProvinceMapping = names.reduce((accumulator, currentName, index) => {
        accumulator[currentName] = provinces[index];
        return accumulator;
    }, {});

    console.log(nameProvinceMapping);

    console.log('\nFormatted mapping:')
    Object.entries(nameProvinceMapping).forEach(([name, province]) => {
        console.log(`  ${name}: ${province}`)
    })
}

export default reduceExercises