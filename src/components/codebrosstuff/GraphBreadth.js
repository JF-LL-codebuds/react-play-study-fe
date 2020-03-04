// Let's say you have a sorted list of objects 10,000 with a value key and you want to build a 
//function which returns true if the value is in the list 
// const special list = [{value: -2},{value: 14},{value: 20}...etc]
// function a with input 77 --> true/false

// get the middle value
// check the middle value against 77
// if it's below 77 we repeat our search in the top half
// if it's above 77 we repeat our search in the bottom half
// if we have a list with no length we return false
// if we find the value we return true

class Node {
  constructor(value, otherNodeArray) {
    this.value = value
    this.connections = otherNodeArray
  }
  bfs(val) {
    // set up a que-style list with our connections & pass in starting node as first que item
    // while loop (as long as list has length)
    // check if current node is/is not desired value (return current node if is desired value)
    // if current node not desired value, pass in current node connections to list to the end of the list.
    // process next item in list.
    // if list is empty return false
    
  }
}
// const rootNode is the home node that you start on, you need to build a method on the node 
// class that searches all the other nodes in the graph for a specific value return the node with the value or false.
// for the shortest path.
