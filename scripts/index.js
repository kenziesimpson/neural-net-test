let trainedNetwork

function encodeData(input) {
    return input.split('').map(x => x.charCodeAt(0))
}

function convertData(data) {
    return data.map(d => {
        return {
            input: encodeData(d.input),
            output: d.output
        }
    })
}

function train(data) {
    let network = new brain.NeuralNetwork()
    network.train(convertData(data))
    trainedNetwork = network.toFunction()
    console.log('finished training')    
}

function execute(input) {
    let results = trainedNetwork(encodeData(input))
    let output
    results.english > results.latin ? output = 'english' : output = 'latin'
    return output;
}

train(trainingData)

console.log(execute("These aren't real. Kanye would never write Yeezy on the side"))

console.log(execute("Whether we are Republican or Democrat, we must now focus on strengthening Background Checks!"))

console.log(execute("Once upon a time, there was a little girl named Goldilocks.  She  went for a walk in the forest.  Pretty soon, she came upon a house.  She knocked and, when no one answered, she walked right in. At the table in the kitchen, there were three bowls of porridge.  Goldilocks was hungry.  She tasted the porridge from the first bowl. So, she tasted the porridge from the second bowl. So, she tasted the last bowl of porridge. So she sat in the second chair."))
