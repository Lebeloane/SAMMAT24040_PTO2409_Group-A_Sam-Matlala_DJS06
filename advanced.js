import { products } from './data.js';

const advancedExercises = () => {
    // Product Names
    console.log('Product Names\n');
    console.log('All products:', 
        products.map(item => item.product).join(', ')
    );

    // Name Length Filter
    console.log('\nShort Names (≤ 5 characters)\n');
    console.log('Filtered products:', 
        products
            .filter(item => item.product.length <= 5)
            .map(item => item.product)
            .join(', ')
    );

    // Price Calculations
    console.log('\nPrice Calculations\n');
    const validPrices = products
        .filter(item => item.price !== '' && item.price !== ' ')
        .map(item => Number(item.price));

    console.log('Total price:', 
        validPrices.reduce((sum, price) => sum + price, 0)
    )

    // Concatenated Names
    console.log('\nConcatenated Product Names\n')
    console.log('All products string:', 
        products.reduce((str, item, index) => 
            index === 0 ? item.product : `${str}, ${item.product}`, '')
    )

    // Price Extremes
    console.log('\nPrice Extremes\n')
    const priceExtremes = (() => {
        const validProducts = products.filter(item => 
            item.price !== '' && item.price !== ' '
        )
        const prices = validProducts.map(item => Number(item.price))
        return {
            highest: Math.max(...prices),
            lowest: Math.min(...prices)
        }
    })()

    console.log(`Highest: ${priceExtremes.highest}. Lowest: ${priceExtremes.lowest}`)

    // Object Transformation
    console.log('\nTransformed Products\n')
    const transformedProducts = products.reduce((acc, item) => {
        acc.push({
            name: item.product,
            cost: item.price
        })
        return acc
    }, [])

    console.log(transformedProducts)
}

export default advancedExercises