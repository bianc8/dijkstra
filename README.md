<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/enricBiancott0/dijkstra">
    <img src=".\images\logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Dijkstra JS implementation</h3>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Usage](#usage)
- [See](#see)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project
[![Home Page Screen Shot][home-screen]](https://github.com/enricBiancott0/dijkstra)
[![Select start node][start-node]](https://github.com/enricBiancott0/verifica)
[![Select end node][end-node]](https://github.com/enricBiancott0/dijkstra)
[![Dijkstra prova.txt][dijkstra-prova]](https://github.com/enricBiancott0/dijkstra)

This project was made by Enrico Biancotto in 2017, it is a Javascript implementation of Dijkstra's Algorithm.
As input it uses a txt file formatted as follows:
* Number-of-nodes Start-node End-node
* Node-1 Node-2 Weight
* Node-2 Node-3 Weight
* ...  
Example prova.txt:
5 4 3
0 1 3
1 2 3
2 4 3
0 3 5

Example prova-3.txt:
5
0 1 3
1 2 3
2 4 3
0 3 5
(You will have to choose starting and ending nodes before graph is showed so be careful)

### Built With

This project is entirely based on: 
* [p5](https://p5js.org/)
* [MIT](https://www.youtube.com/watch?v=2E7MmKv0Y24)


<!-- GETTING STARTED -->
## Getting Started

Clone this repository or download in your local computer
* git installed or click download
```sh
git clone https://github.com/enricBiancott0/dijkstra
```

### Prerequisites

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Open terminal and check installation typing
```sh
git --version
```
2. [Browser](https://www.techradar.com/best/browser)

<!-- USAGE EXAMPLES -->
## Usage

Open index.html, drag and drop prova.txt or prova-2.txt or prova-3.txt
## See
[![Dijkstra prova.txt][drag-drop]](https://github.com/enricBiancott0/dijkstra)


<!-- CONTACT -->
## Contact

Enrico Biancotto - [@enricobiancotto](https://instagram.com/enricobiancotto) - enricobiancotto@protonmail.com

Project Link: [https://github.com/enricBiancott0/dijkstra](https://github.com/enricBiancott0/dijkstra)

<!-- MARKDOWN LINKS & IMAGES -->
[start-node]: images/startNode.png
[end-node]: images/endNode.png
[dijkstra-prova]: images/dijkstraProva.png
[dijkstra-complicated]: images/dijkstraComplicated.png
[drag-drop]: images/drag.png
[home-screen]: images/home.png
