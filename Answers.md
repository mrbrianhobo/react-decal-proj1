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

## 2.0 Give an example of a component we haven't built or talked about in class that would require state. Why does it need state? ##
the document part of a google docs/dropbox paper file or an online calculator. it needs state to be interactive since the data entered by the user is always changing, but it doesn't get its data from a prop and it can't be computed from other sources. therefore the state of the document component needs to update whenever a user changes things.

## 2.1 How do we accomplish parent-to-child communication in React? What about child-to-parent? Why can't they be the same? ##
for parent-to-child communication, the parent simply feeds the needed data/props down to its children components since it already has access to that data (i.e. list of products and prices). but for child-to-parent communication, things are a bit more complicated. for this to happen, the parent needs to provide a way for the child to trigger updates (i.e through a function passed via props) so it looks like the parent is updating itself. they can't be the same since the child components might not have access to state/data that the parent controls (i.e. child component can't update parent state), so the child needs an abstracted way to update the parent without having to know anything about the parent component.

## 2.2 How might we go about adding and removing items from the cart given the structure of our state? ##
since we have a list that keeps track of all the items in our cart stored in our state, when we add/remove items, we can update that list and have our react app render the new state (via setState). 