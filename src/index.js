var Dracula = require('graphdracula')

var Graph = Dracula.Graph
var Renderer = Dracula.Renderer.Raphael
var Layout = Dracula.Layout.Spring

window.onload = function() {

  var userName = document.getElementById('userName');
  var partner1 = document.getElementById('partner1Name');
  var addPeopleButtons = document.getElementsByClassName("addPeople");
  console.log(addPeopleButtons);
  var submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    drawGraph(userName.value, partner1.value);
  });

  for (let item of addPeopleButtons) {
    item.addEventListener('click', function() {
      alert('hello!');
    })
  }

}

function removeElement(element) {
  var element = document.getElementsByTagName('svg');
  for (let item of element) {
    item.remove();

  }
}

function drawGraph(userName, partner1) {
  var graph = new Graph();
  removeElement();
  graph.addEdge(userName, partner1)

  var layout = new Layout(graph)
  var renderer = new Renderer('#paper', graph, 400, 300)
  renderer.draw()
}
