
//Project group Peter Feher, Jen Foko and Alan Jones


const parentElement = document.querySelector('.katas-list')
//kata 1
const kata1Heading = document.createElement('h3')
kata1Heading.append('KATA 1')
parentElement.append(kata1Heading)

for (let i = 1; i <= 20; i += 1) {

    let kata1Numbers = document.createElement('p')
    kata1Numbers.append(i)
    kata1Heading.append(kata1Numbers)
}



//kata 2

const kata2Heading = document.createElement('h3')
kata2Heading.append('KATA 2')
parentElement.append(kata2Heading)





for (let i = 2; i <= 20; i += 2) {

    let kata2Numbers = document.createElement('p')
    kata2Numbers.append(i)
    kata2Heading.append(kata2Numbers)
    console.log(i)
}

// //kata 3

const kata3Heading = document.createElement('h3')
kata3Heading.append('KATA 3')
parentElement.append(kata3Heading)





for (let i = 1; i <= 20; i += 2) {

    let kata3Numbers = document.createElement('p')
    kata3Numbers.append(i)
    kata3Heading.append(kata3Numbers)
    console.log(i)
}

// //kata 4

const kata4Heading = document.createElement('h3')
kata4Heading.append('KATA 4')
parentElement.append(kata4Heading)


for (let i = 5; i <= 100; i += 5) {

    let kata4Numbers = document.createElement('p')
    kata4Numbers.append(i)
    kata4Heading.append(kata4Numbers)
    console.log(i)
}

// //kata 5

const kata5Heading = document.createElement('h3')
kata5Heading.append('KATA 5')
parentElement.append(kata5Heading)


for (let i = 1; i <= 100; i += 1) {

    const counter5IsPerfectSquare = Number.isInteger(Math.sqrt(i))
    if (counter5IsPerfectSquare) {


        let kata5Numbers = document.createElement('p')
        kata5Numbers.append(i)
        kata5Heading.append(kata5Numbers)
        console.log(i)
    }
}

// //kata 6

const kata6Heading = document.createElement('h3')
kata6Heading.append('KATA 6')
parentElement.append(kata6Heading)


for (let i = 20; i >= 1; i -= 1) {

    let kata6Numbers = document.createElement('p')
    kata6Numbers.append(i)
    kata6Heading.append(kata6Numbers)
    console.log(i)
}

// //kata 7

const kata7Heading = document.createElement('h3')
kata7Heading.append('KATA 7')
parentElement.append(kata7Heading)


for (let i = 20; i >= 2; i -= 2) {

    let kata7Numbers = document.createElement('p')
    kata7Numbers.append(i)
    kata7Heading.append(kata7Numbers)
    console.log(i)
}

// //kata 8

const kata8Heading = document.createElement('h3')
kata8Heading.append('KATA 8')
parentElement.append(kata8Heading)


for (let i = 19; i >= 1; i -= 2) {

    let kata8Numbers = document.createElement('p')
    kata8Numbers.append(i)
    kata8Heading.append(kata8Numbers)
    console.log(i)
}

// //kata 9

const kata9Heading = document.createElement('h3')
kata9Heading.append('KATA 9')
parentElement.append(kata9Heading)


for (let i = 100; i >= 5; i -= 5) {

    let kata9Numbers = document.createElement('p')
    kata9Numbers.append(i)
    kata9Heading.append(kata9Numbers)
    console.log(i)
}

// // kata 10


const kata10Heading = document.createElement('h3')
kata10Heading.append('KATA 10')
parentElement.append(kata10Heading)



for (let i = 100; i >= 1; i -= 1) {
    const counter10IsPerfectSquare = Number.isInteger(Math.sqrt(i))
    if (counter10IsPerfectSquare) {


        let kata10Numbers = document.createElement('p')
        kata10Numbers.append(i)
        kata10Heading.append(kata10Numbers)
        console.log(i)
    }

}

//kata 11

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const kata11Heading = document.createElement('h3')
kata11Heading.append('kata 11')
parentElement.append(kata11Heading)


for (let index = 0; index < sampleArray.length; index += 1) {
    console.log(sampleArray[index])

    let kata11Numbers = document.createElement('p')
    kata11Numbers.append(sampleArray[index])
    kata11Heading.append(kata11Numbers)

}

//kata 12

const kata12Heading = document.createElement('h3')
kata12Heading.append('kata 12')
parentElement.append(kata12Heading)


for (let index = 0; index < sampleArray.length; index += 1) {
    console.log(sampleArray[index])
    if (sampleArray[index] % 2 === 0) {



        let kata12Numbers = document.createElement('p')
        kata12Numbers.append(sampleArray[index])
        kata12Heading.append(kata12Numbers)

    }

}

//kata 13


const kata13Heading = document.createElement('h3')
kata13Heading.append('kata 13')
parentElement.append(kata13Heading)


for (let index = 0; index < sampleArray.length; index += 1) {
    console.log(sampleArray[index])
    if (sampleArray[index] % 2 === 1) {



        let kata13Numbers = document.createElement('p')
        kata13Numbers.append(sampleArray[index])
        kata13Heading.append(kata13Numbers)

    }


}

//kata 14



const kata14Heading = document.createElement('h3')
kata14Heading.append('kata 14')
parentElement.append(kata14Heading)

for (let index = 0; index < sampleArray.length; index += 1) {

    let numberedSquared = sampleArray[index] * sampleArray[index]
    let kata14Numbers = document.createElement('p')
    kata14Numbers.append(numberedSquared)
    kata14Heading.append(kata14Numbers)
}


//kata 15

const kata15Heading = document.createElement('h3')
kata15Heading.append('kata 15')
parentElement.append(kata15Heading)

for (let index = 0; index < sampleArray.length; index += 1) {

    let sum = 0
    let numbered = sampleArray[index]
    let innerArray = numbered.toString().split("")
    for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex += 1) {

        sum += Number(innerArray[innerIndex])
    }
    let kata15Numbers = document.createElement('p')
    kata15Numbers.append(sum)
    kata15Heading.append(kata15Numbers)

}

//kata 16

let kata16Heading = document.createElement('h3')
kata16Heading.append('kata16')
parentElement.append(kata16Heading)

let kata16Sum = 0

for (let index = 0; index < sampleArray.length; index += 1) {


    kata16Sum += sampleArray[index]
}
let kata16Numbers = document.createElement('p')
kata16Numbers.append(kata16Sum)
kata16Heading.append(kata16Numbers)

//kata 17


const kata17Heading = document.createElement('h3')
kata17Heading.append('kata 17')
parentElement.append(kata17Heading)

let smallestArrayNum = sampleArray[0]

for (let index = 0; index < sampleArray.length; index += 1) {

    if (sampleArray[index] < smallestArrayNum) {
        smallestArrayNum = sampleArray[index]
        console.log(smallestArrayNum)

    }

}
let kata17Numbers = document.createElement('p')
kata17Numbers.append(smallestArrayNum)
kata17Heading.append(kata17Numbers)


//kata 18


const kata18Heading = document.createElement('h3')
kata18Heading.append('kata 18')
parentElement.append(kata18Heading)


let largestArrayNum = sampleArray[0]

for (let index = 0; index < sampleArray.length; index += 1) {

    if (sampleArray[index] > largestArrayNum) {
        largestArrayNum = sampleArray[index]
        console.log(largestArrayNum)

    }

}
let kata18Numbers = document.createElement('p')
kata18Numbers.append(largestArrayNum)
kata18Heading.append(kata18Numbers)



// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
// kata 12
// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
// kata 13
// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
// kata 14
// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
// kata 15
// Display the sum of all the numbers from 1 to 20.
// kata 16
// Display the sum of all the elements in sampleArray.
// kata 17
// Display the smallest element in sampleArray.
// kata 18
// Display the largest element in sampleArray.









