var Dracula = require('graphdracula');
var Graph = Dracula.Graph;
var Renderer = Dracula.Renderer.Raphael;
var Layout = Dracula.Layout.Spring;

var userName = document.getElementById('userName');
var partner1 = document.getElementById('partner1Name');
var partner2 = document.getElementById('partner2Name');
var partner3 = document.getElementById('partner3Name');
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
  var storedUserName = userName.value;
  var partner1Name = partner1.value;
  var partner2Name = partner2.value;
  var partner3Name = partner3.value;
});

var g = new Graph();
g.addEdge(storedUserName, partner1Name);
g.addEdge(storedUserName, partner2Name);
g.addEdge(storedUserName, partner3Name);

var layouter = new Dracula.Layout.Spring(g);
layouter.layout();

var renderer = new Dracula.Renderer.Raphael('canvas', g, 400, 300);
renderer.draw();
