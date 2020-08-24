//Progetto di Enrico Biancotto e Pietro Ceolotto
//Sistemi 4A
//GRAFI e Algoritmi di Shortest Path

//variabili globali
var dropzone;
var canvas;
var inizia = false;
var str = "";
var n_nodi;
var angle;
var start;
var target;
var r = 230;
var nomi = new Map();
var n1;
var n2;
var link;
var link_r;
var Grafo = new GraphAdjList();
var pQ = new codaPriorita();
var pQ_r = new codaPriorita();
var path;
var tabella = new p5.Table();
var diametro = 40;
var scrivi;

function setup() {
  angleMode(DEGREES); //imposta come unità di misura per gli angoli i gradi
  tabella.addColumn("nodoCorrente");
  tabella.addColumn("nodoVicino");
  tabella.addColumn("distanzaVicino");
  tabella.addColumn("distanzaEffettiva");
  w = document.getElementById("check").offsetWidth;
  canvas = createCanvas(w, 600).parent("check"); //inserisce il canvas in check
  //Drag&Drop handling
  dropzone = select("#dropzone");
  dropzone.drop(leggiTesto); //lettura di file in input
}
function draw() {
  //colore di sfondo bianco
  background(255);
  //sposta il centro in centro del canvas
  translate(w / 2, 600 / 2);
  fill(0);
  noStroke();
  textSize(30);
  if (!inizia) {
    text("Drag here prova.txt", -250, 0);
  }
  clear();
  stroke(0, 191, 255); //colore circonferenza
  strokeWeight(3); //spessore circonferenza
  if (inizia) {
    //nodo corrente
    var u;
    var x1;
    var y1;
    var vicini;
    var costo;
    var x2;
    var y2;
    var xm;
    var ym;
    //disegna collegamenti nel canvas
    for (var i = 0; i < Grafo.size(); i++) {
      u = Grafo.elementAt(i);
      x1 = u.getX();
      y1 = u.getY();
      vicini = u.getVicini();
      for (var j = 0; j < vicini.length; j++) {
        x2 = vicini[j].getN2().getX();
        y2 = vicini[j].getN2().getY();
        costo = vicini[j].getPeso();
        xm = (x2 + x1) / 2;
        ym = (y2 + y1) / 2;
        line(x1, y1, x2, y2);
        text(costo, xm - 5, ym + 10);
      }
    }
    //disegna nodi nel canvas
    for (var i = 0; i < Grafo.size(); i++) {
      u = Grafo.elementAt(i);
      u.display();
    }
    //disegna la Shortest Path collegamenti
    for (let i = 0; i < path.length - 1; i++) {
      x1 = path[i].getX();
      y1 = path[i].getY();
      x2 = path[i + 1].getX();
      y2 = path[i + 1].getY();
      xm = (x2 + x1) / 2;
      ym = (y2 + y1) / 2;
      stroke(0, 214, 0);
      line(x1, y1, x2, y2);
    }
    //mostra a schermo i nodi secondo dijkstra
    for (let i = 0; i < path.length; i++) {
      path[i].displaySP();
    }
  }
}
function Leggi(inizio, fine) {
  start = new mdc.textfield.MDCTextfield(
    document.querySelector("#inizio")
  ).getValue();
  target = new mdc.textfield.MDCTextfield(
    document.querySelector("#fine")
  ).getValue();
}

function iniziaGrafo() {
  var k = 0;
  //il primo carattere del testo determina il numero di nodi
  n_nodi = parseInt(str.split(" ", 3)[0]);
  //per il posizionamento nello schermo
  angle = 360 / n_nodi;
  //il secondo carattere del testo determina il nodo iniziale
  start = str.split(" ", 3)[1];
  //il secondo carattere del testo determina il nodo finale
  target = str.split(" ", 3)[2];
  //cancella primi tre elementi da str (n_nodi,start,target)
  for (let i = 0; i < 3; i++) {
    str = str.replace(str.split(" ")[0] + " ", "");
  }
  for (let i = 0; i < str.length; i++) {
    //inizializza nodi e collegamenti nel grafo
    if (!nomi.has(str.split(" ", 3)[0])) {
      n1 = new Node(str.split(" ", 3)[0], r * cos(k), r * sin(k));
      k -= angle;
      nomi.set(n1.getName(), [n1.getX(), n1.getY()]);
    } else {
      [x1, y1] = nomi.get(str.split(" ", 3)[0]);
      n1 = new Node(str.split(" ", 3)[0], x1, y1);
    }
    if (!nomi.has(str.split(" ", 3)[1])) {
      n2 = new Node(str.split(" ", 3)[1], r * cos(k), r * sin(k));
      k -= angle;
      nomi.set(n2.getName(), [n2.getX(), n2.getY()]);
    } else {
      [x1, y1] = nomi.get(str.split(" ", 3)[1]);
      n2 = new Node(str.split(" ", 3)[1], x1, y1);
    }
    //collegamento fra i due nodi
    link = new Edge(n2, parseInt(str.split(" ", 3)[2]));
    //aggiunge i vicini al primo nodo
    n1.addVicino(link);
    //collegamento contrario tra i due nodi
    link_r = new Edge(n1, parseInt(str.split(" ", 3)[2]));
    //aggiunge i vicini al secondo nodo
    n2.addVicino(link_r);
    //aggiunge i due nodi al grafo e al grafo inverso coincidenti perchè bidirezionale
    Grafo.addNode(n1);
    Grafo.addNode(n2);
    //aggiunnge i due nodi alla coda prioritaria
    pQ.push(n1);
    pQ.push(n2);
    pQ_r.push(n1);
    pQ_r.push(n2);
    //cancella primi tre elementi da str, in quanto già elaborati
    for (let i = 0; i < 3; i++) {
      str = str.replace(str.split(" ")[0] + " ", "");
    }
  }
  //associazione start e target a nodi relativi
  start = Grafo.getNode(start);
  target = Grafo.getNode(target);
  //implementazione dell'algoritmo di Dijkstra passando inizio e fine ritorna lista di nodi
  path = dijkstra(start, target);
  createP(
    "Cammino minimo da " +
      start.getName() +
      " a " +
      target.getName() +
      " con costo " +
      target.getDistanza()
  ).parent("#text");
  inizia = true;
}

//Drag&Drop file Upload
function richiediStartEnd() {
  start = prompt("Seleziona il nodo iniziale");
  target = prompt("Seleziona il nodo finale");
  str =
    str.split("\n")[0] +
    start +
    " " +
    target +
    "\n" +
    str.substring(str.indexOf("\n") + 1);
}

//Legge il testo e controlla eventuali errori
function leggiTesto(file) {
  if (file.type != "text" || file.subtype != "plain") {
    overlayon();
  } else {
    //controlla che la prima riga contenga sia inizio e fine
    let controllo = file.data.split("\n")[0].split(" ");
    str = file.data;
    if (controllo.length != 3) {
      richiediStartEnd();
    }
    //str contiene il file in più righe
    // toglie tutti carattere a capo tramite Regular Expression
    str = str.replace(/(?:\r\n|\r|\n)/g, " ");
    str = str.replace(/"  "/g, " ");
    Grafo.clear();
    iniziaGrafo();
  }
}

//adatta le dimensioni del canvas al div
function windowResized() {
  w = document.getElementById("check").offsetWidth;
  resizeCanvas(w, 600);
}
