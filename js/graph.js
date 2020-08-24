class GraphAdjList{
	constructor() {
		this.nodi = new Array();
	}

	//controlla la presenza di un nodo
	contiene(node) {
		var name = node.getName();
		var bol = false;
		this.nodi.forEach(function (nodo, index) {
			if (nodo.getName() == name) {
				bol = true;
			}
		});
		return bol;
	}

	//unisce nodi uguali, concatenando le liste di vicini
	unisci(node) {
		var name = node.getName();
		this.nodi.forEach(function (nodo, index) {
			if (nodo.getName() == name) {
				nodo.concatVicini(node.getVicini());
			}
		});
	}

	//aggiunge un nodo alla lista nodi
	addNode(node) {
		//se nell'array non esiste il nodo lo inserisce
		if (this.contiene(node) === false) {
			this.nodi.push(node);
		} else {
			this.unisci(node);
		}
	}

	//ritorna il peso di un nodo
	getPeso(n1,n2) {
		let peso;
		let vicini;
		vicini = this.getNode(n1.getName()).getVicini();
		for (let i = 0; i<vicini.length; i++) {
			if (vicini[i].getN2().getName() == n2.getName()) {
				peso = vicini[i].getPeso();
			}
		}
		return peso;
	}

	//ritorna la dimensione della  lista nodi
	size() {
		return this.nodi.length;
	}

	//ritorna un nodo data la stringa del nome di un nodo contenuto
	getNode(stringa) {
		let cos;
		this.nodi.forEach(function (nodo, index) {
			if (nodo.getName() == stringa) {
				cos = nodo;
			}
		});
		return cos;
	}

	//ritorna il nodo corrispondente all'indice indicato
	elementAt(i) {
		return this.nodi[i];
	}

	//aggiornamento di distanza nel grafo
	updateIt(str, distanza, prec, processato) {
		var index = this.nodi.indexOf(this.getNode(str));
		var node = this.nodi[index];
		node.setDistanza(distanza);
		node.setPrecedente(prec);
		node.setProcessato(processato);
		this.nodi[index] = node;
		//aggiorna le priorità della coda con le distanze effettive
		pQ.updateAll();
	}

	//restituisce la shortest path inversa, partendo dal target
	reversePath(){
		let prec = [];
		//chi corrisponde al nodo finale dell'algoritmo
		let chi = this.getNode(target.getName());
		prec.push(chi);
		//finche chi è diverso dall'inizio procede
		while (chi !== start) {
			chi = chi.getPrecedente();
			//inserisce il precedente del noddo corrente nella lista finale di precedenti
			prec.push(chi);
		}
		//fa partire la lista dallo start
		prec.reverse();
		return prec;
	}

	//pulisci il grafo da tutti i nodi, non più usati
	clear() {
		this.nodi = new Array();
	}

}
