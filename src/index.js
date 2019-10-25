var Dracula = require('graphdracula')

var Graph = Dracula.Graph
var Renderer = Dracula.Renderer.Raphael
var Layout = Dracula.Layout.Spring


window.onload = function() {

  var userName = document.getElementById('userName');
  var partner1 = document.getElementById('partner1Name');
  var partner2 = document.getElementById('partner2Name');
  var partner3 = document.getElementById('partner3Name');
  var submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    drawGraph(userName.value, partner1.value, partner2.value, partner3.value);
    /*
    storedUserName = userName.value;
    partner1Name = partner1.value;
    partner2Name = partner2.value;
    partner3Name = partner3.value;
    */
  });


}

function drawGraph(userName, partner1, partner2, partner3) {
  var graph = new Graph()

  graph.addEdge(userName, partner1)
  graph.addEdge(partner1, partner2)
  graph.addEdge(partner1, partner3)
  graph.addEdge(partner3, userName)
  graph.addEdge(partner2, userName)

  var layout = new Layout(graph)
  var renderer = new Renderer('#paper', graph, 400, 300)
  renderer.draw()
}
