class Node{
  constructor(name, x, y) {
    this.name = name;
    //variabili per algoritmo di Dijkstra e per algoritmo bidirezionale di Dijkstra
    this.distanza = Number.MAX_VALUE;
    this.vicini = new Array();
    this.processato = false;
    this.precedente = null;
    //algortimmo di Dijkstra bidirezionale
    this.distanza_r = Number.MAX_VALUE;
    this.precedente_r = null;
    this.processato_r = false;
    //variabili per disegnare nodi
    this.x = x;
    this.y = y;
  }
  //ritorna l'ascissa del nodo
  getX() {
    return this.x;
  }
  //ritorna l'ordinata del nodo
  getY() {
    return this.y;
  }
  //ritorna il nome del nodo
  getName() {
	  return this.name;
  }
  //aggiunge un vicino
  addVicino(edge) {
    this.vicini.push(edge);
  }
  //concatena vicini dello stesso nodo, necessario nell'inizializzazione
  concatVicini(vett) {
    this.vicini = this.vicini.concat(vett);
  }
  //ritorna la lista dei vicini
  getVicini() {
    return this.vicini;
  }
  //imposta la distanza dal nodo iniziale
  setDistanza(intero) {
    this.distanza = intero;
  }
  //ritorna la distanza dal nodo iniziale
  getDistanza() {
    return this.distanza;
  }
  //imposta la distanza dal nodo finale nella backward search
  setDistanza_r(intero) {
    this.distanza_r = intero;
  }
  //ritorna la distanza nella backward search
  getDistanza_r() {
    return this.distanza_r;
  }
  //setta il puntatore al nodo precedente
  setPrecedente(nodo) {
    this.precedente = nodo;
  }
  //ritorna il nodo precedente
  getPrecedente() {
    return this.precedente;
  }
  //setta il puntatore al nodo precedente nella backward search
  setPrecedente_r(nodo) {
    this.precedente_r = nodo;
  }
  //ritorna il nodo precedente nella backward search
  getPrecedente_r() {
    return this.precedente_r;
  }
  //imposta che il nodo è stato processato nella forward search
  setProcessato(processato) {
    this.processato = processato;
  }
  //ritorna false se il nodo non è stato processato nella forward search
  getProcessato() {
    return this.processato;
  }
  //imposta che il nodo è stato processato nella backward search
  setProcessato_r() {
    this.processato_r = true;
  }
  //ritorna false se il nodo non è stato processato nella backward search
  getProcessato_r() {
    return this.processato_r;
  }
  //mostra a schermo il nodo
  display() {
    stroke(0, 191, 255);//colore circonferenza
    strokeWeight(3);//spessore circonferenza
    fill(0, 191, 255);//colore cerchio
    ellipse(this.x, this.y, diametro);//ellisse in x,y con diametro 40
    textSize(24);
    fill(0);
    noStroke();
    text(this.name,this.x-15,this.y+8);
  }

  //mostra a schermo il nodo nella Shortest Path
  displaySP() {
    stroke(0, 0, 0);//colore circonferenza
    strokeWeight(3);//spessore circonferenza
    fill(0, 214, 0);//colore cerchio
    ellipse(this.x, this.y, diametro);//ellisse in x,y con diametro 40
    textSize(24);
    fill(0);
    noStroke();
    text(this.name,this.x-15,this.y+8);
  }
}
