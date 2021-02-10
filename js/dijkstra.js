//////////////////////////////////////////
//				        //
//        Algoritmo di Dijkstra		//
//  algoritmo di shortest path finding  //
//					//
//////////////////////////////////////////

//single-source single-target dijkstra algorithm, unica distanza minima da inizio a fine
function dijkstra(start, target) {
  //nodo corrente con costo minimo dal nodo corrente
  var curr;
  //array di vicini
  var vicini;
  //nodo vicino
  var v;
  //distanza teorica
  var distanzaEffettiva;
  //fine inizializzazione variabili, inizio algoritmo

  //decoda curr come nodo con distanza minima nella coda
  //tutti i nodi hanno costo +INF, a parte il costo del nodo iniziale vale 0
  Grafo.updateIt(start.getName(), 0, null, false);
  //cicla finche o tutti i nodi sono stati esplorati oppure la fine è stata trovata
  while (pQ.isEmpty() != true) {
    curr = pQ.removeMin();
    vicini = curr.getVicini();
    //se curr non è gia stato processato allora continua
    if (curr.getProcessato() == false) {
      //viene aggiornato il nodo u nel grafo, impostato a true processato
      curr.setProcessato(true);
      Grafo.updateIt(
        curr.getName(),
        curr.getDistanza(),
        curr.getPrecedente(),
        curr.getProcessato()
      );
      //se è il nodo finale finisci restituendo la path costruita partendo dalla fine, aggiungendo i predecessori di volta in volta
      if (curr.getName() == target.getName()) {
        return Grafo.reversePath();
      }
      //aggiornamento delle distanze dei vicini di u
      for (var i = 0; i < vicini.length; i++) {
        //trova il secondo nodo dal collegamento col primo
        v = Grafo.getNode(vicini[i].getN2().getName());
        if (v.getProcessato() == false) {
          //La funzione di relax o l'aggiornamento dei valori è una procedura sicura,
          // priva di errori, dimostrabile matematicamente tramite la disuguaglianza triangolare.
          //se la distanza del nodo dalla sorgente è maggiore della distanza del nodo precedente sommato al peso del collegamento tra u e v aggiorna la distanza effettiva
          distanzaEffettiva = curr.getDistanza() + Grafo.getPeso(curr, v);
          if (v.getDistanza() > distanzaEffettiva) {
            //aggiorna nel grafo i nodi con distanza minore
            //viene impostato il predecessore del nodo v come il nodo u
            v.setDistanza(distanzaEffettiva);
            Grafo.updateIt(
              v.getName(),
              distanzaEffettiva,
              curr,
              Grafo.getNode(v.getName()).getProcessato()
            );
          }
        }
      }
    }
  }
  return [];
}
