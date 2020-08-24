//Coda a priorità composta da oggetti nodi
class codaPriorita {
	constructor() {
		this.data = new Array();
	}

	//funzione che determina se l'array è vuoto
	isEmpty() {
		return this.data.length == 0;
	}

	//controlla la presenza di un nodo
	contiene(str) {
		var bol = false;
		this.data.forEach(function (nodo, index) {
			if (nodo.getName() == str) {
				bol = true;
			}
		});
		return bol;
	}

	//inserire ordinatamente nella coda a priorità minima
	push(nodo) {
		if (this.contiene(nodo.getName()) === false) {
			//oggetto nodo aggiunto alla coda
			this.data.push(nodo);
		}
	}

	//algoritmo di ordinamento dell'array
	sortAlgo(a, b) {
		return a.getDistanza() - b.getDistanza();
	}

	//restituisce il minimo, ovvero il primo elemento della coda a priorità
	removeMin(nodo) {
		//ordina l'array in base alla distanza
		this.data.sort(this.sortAlgo);
		//prende il minimo nell'array ordinato
		let min = this.data[0];
		//rimuove minimo da array contenuto nella prima posizione dell'array ordinato
		this.data.splice(0,1);
		return min;
	}

	//aggiorna tutti i nodi prendendoli dal grafo
	updateAll(){
		for (let j = 0; j < this.data.length; j++){
			this.data[j] = Grafo.getNode(this.data[j].getName());
		}
	}
	toString() {
		let finale = [];
		for (let i = 0; i<this.data.length; i++) {
			finale.push([this.data[i].getName(),this.data[i].getDistanza()]);
		}
		return finale;
	}
}
