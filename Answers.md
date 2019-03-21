# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

## 1.1 Explain in your own words what `ReactDOM.render` is doing. ##
it is rendering the Cart component over wherever the #root element is.

## 1.2 What are some of the advantages and cons to using Semantic UI? (or any UI library for that matter) ##
pro: you don't have to write your own css! you get to use components that have already been defined for you! can get started faster!
con: you're only given so much. if you want more advanced components, you have to define them yourself!

## 1.3 In your own words, explain why we need to wrap `addToCart` with another function. ##
simply passing in `addToCart` to onClick doesn't let us call the function with our wanted arguments (passes in an event arg)
instead we wrap it in another function that let's us define specific behavior for the `atToCart` function.

## 1.4a What allowed us to only write the Product component once inside the Cart's `render` function? ##
we were able to map the Product component over the data provided from ProductData, where we only had to define the Product component once, and the map function took care of creating Product components for each list value.

## 1.4b What benefit, besides code cleanliness, do we get from pulling in the data from an object instead? ##
this doesn't scale well. the more products you have (i.e. you are Amazon), the more Products components you need to create. if you have to add/delete items, you would have to modify your Cart component while if u had them in a list in like a json, you could easily manipulate that (i.e. have functions to modify normal data structures not Cart components). 