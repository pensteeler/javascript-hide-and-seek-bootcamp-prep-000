function getFirstSelector(selector) {
  const firstElement = document.querySelector( selector )
  return firstElement
}

function nestedTarget() {

  var myElement = document.getElementById("nested").querySelector(".target")
  //var myElement = document.querySelector("#nested .target")

  return myElement
}

function increaseRankBy(n) {

  const lis = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = toString( parseInt(lis[i].innerHTML) + n )
  }

}

function deepestChild() {
  debugger;
  //console.log("#####  INTO deepestChild   ########")

  var currentNodeString = "#grand-node"  // Since this is where we are starting search
  var nodeString = ""
  var divString = "div"  // Since we are only looking for div's in this lab

  var numChildNodes = 0
  var nodeCount = 0
  //var hasChildNodes = false

  //  Would be useful if we needed to work through nodes of
  //  unknow type or siblings
  /*
    var myNodeList = document.querySelectorAll("grand-node");
    var myArray = []; // empty Array
    for (var i = 0; i < myNodeList.length; i++) {
        var self = myNodeList[i];
        myArray.push(self);
        console.log("self[",i,"] is:", myNodeList[i])
    }
  */


  var currentNode = document.querySelector("#grand-node")  // Start searching from #grand-node
  var numChildNodes = document.querySelector("#grand-node").childNodes.length

  // Tried using hasChildNodes, but while loop kept failing when
  // hasChildNodes return null on deepest node
  // hasChildNodes = document.querySelector("#grand-node").hasChildNodes()
  // After posting question online tutor showed to step through all the div's

  while( nodeCount < numChildNodes )
  {
    currentNode = currentNode.querySelector( divString )
    nodeCount++
  }

  return currentNode

//  Tried to build the querySelector string dynamically but hasChildNodes failed
//  while loop whrn returning null
/*
while( document.querySelector( currentNodeString ).hasChildNodes() ) // It has children
  {
    //currentNode = document.querySelector(currentNode.childNodes)
    nodeString = currentNodeString + " div"  //Assumes stepping into div's
    currentNodeString = nodeString

    currentNode = document.querySelector(currentNodeString).childNodes
    hasChildNodes = document.querySelector( currentNodeString ).hasChildNodes()
  }
*/

}
