# 🎮 CodeQuest

Un jeu interactif pour **apprendre à coder et à raisonner en jouant**. Le joueur s'inscrit, puis résout des défis de plus en plus difficiles : écrire du code JavaScript, répondre à des énigmes de logique et expliquer comment résoudre un problème.

Tout fonctionne dans le navigateur, **sans serveur ni installation** : un seul fichier HTML (HTML + CSS + JavaScript pur).

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Les 4 types de défis](#les-4-types-de-défis)
- [Démarrage rapide](#démarrage-rapide)
- [Structure du projet](#structure-du-projet)
- [Comment ça marche](#comment-ça-marche)
- [Ajouter un niveau](#ajouter-un-niveau)
- [Limites connues](#limites-connues)
- [Pistes d'amélioration](#pistes-damélioration)
- [Auteur](#auteur)

## Fonctionnalités

- Inscription du joueur (nom et prénom), puis accès direct au premier niveau.
- **41 niveaux** progressifs : du « Hello World » aux algorithmes classiques (PGCD, Fibonacci, tri, binaire…).
- Éditeur de code intégré et panneau de résultat en direct.
- Correction automatique : affichage attendu, tests sur les fonctions, réponses de logique, mots-clés pour les explications.
- Indice disponible à chaque niveau.
- Barre de progression et sauvegarde automatique dans le navigateur (le joueur reprend où il s'est arrêté).
- Thème clair et sombre automatique, interface adaptée au mobile.

## Les 4 types de défis

| Type | Ce que fait le joueur | Comment c'est corrigé |
|---|---|---|
| **Code (O)** | Écrit un code qui affiche un résultat précis (ex. `Hello World`, les nombres de 1 à 5) | Les lignes affichées sont comparées au résultat attendu |
| **Fonction (F)** | Écrit une fonction (ex. `estPair`, `factorielle`, `pgcd`) | La fonction est appelée avec plusieurs jeux d'essai ; chaque test affiche ✓ ou ✗ |
| **Logique (Q)** | Répond à une énigme ou une suite de nombres | La réponse tapée est comparée à la bonne réponse |
| **Explication (E)** | Décrit en français comment résoudre un problème (ex. trouver un mot dans un dictionnaire) | Détection de mots-clés ; la solution type est affichée après réussite |

## Démarrage rapide

1. Récupère le fichier `jeu-code.html` (tu peux le renommer `index.html`).
2. Ouvre-le dans un navigateur moderne (Chrome, Firefox, Edge, Safari) en double-cliquant dessus.

Pour le tester comme sur un vrai site, tu peux aussi lancer un petit serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec PHP
php -S localhost:8000
```

Puis ouvre `http://localhost:8000`.

## Structure du projet

```
codequest/
├── index.html  # structure (HTML), style (CSS)
|-- script.js   # logique (JS)
└── README.md
```


| Partie | Rôle |
|---|---|
| `<section id="register">` | Écran d'inscription (nom, prénom) |
| `<section id="game">` | Écran de jeu : énoncé, éditeur, résultat, indice |
| `<section id="end">` | Écran de félicitations |
| `<style>` | Variables de couleurs, thème sombre, mise en page |
| `<script>` | Liste des niveaux (`LEVELS`) et moteur du jeu |

## Comment ça marche

Le jeu repose sur une idée simple : **les niveaux sont des données**, le moteur les affiche et les corrige.

- `LEVELS` : le tableau de tous les niveaux, construit avec 4 petites fonctions (`O`, `F`, `Q`, `E`).
- `render()` : affiche le niveau courant et montre ou cache les zones selon son type.
- `runCode()` : exécute le code du joueur avec `new Function`, en remplaçant `console` par un faux `console.log` qui capture ce qui est affiché.
- `answer()` et `explain()` : corrigent les niveaux de logique et d'explication.
- `win()` : débloque le niveau suivant et enregistre la progression.
- `localStorage` : conserve le joueur et son niveau dans le navigateur.

## Ajouter un niveau

Il suffit d'ajouter une ligne dans le tableau `LEVELS`, à l'endroit voulu.

**Code avec affichage attendu (`O`)** : titre, énoncé, code de départ, indice, lignes attendues.

```js
O("Code · Compte à rebours",
  "Affiche 3, 2, 1 puis Partez !",
  "// Utilise une boucle\n",
  "for (let i = 3; i >= 1; i--) { console.log(i); }",
  ["3","2","1","Partez !"])
```

**Fonction à tester (`F`)** : titre, énoncé, nom de la fonction, paramètres, indice, tests `[arguments, résultat attendu]`.

```js
F("Code · Le double",
  "Écris double(n) qui retourne le double de n.",
  "double", "n", "return n * 2;",
  [[[2],4],[[0],0],[[-3],-6]])
```

**Question de logique (`Q`)** : titre, énoncé, indice, réponse.

```js
Q("Logique · Les doigts",
  "Combien de doigts ont 3 personnes en tout (sans compter les pouces) ?",
  "Chaque main a 4 doigts hors pouce.",
  24)
```

**Explication (`E`)** : titre, énoncé, indice, groupes de mots-clés, nombre de groupes à trouver, solution type.

```js
E("Explique · Le sandwich",
  "Comment prépares-tu un sandwich ? Décris les étapes.",
  "Pense au pain, à la garniture et à l'ordre.",
  [["pain"],["garniture","fromage","viande","legume"],["coupe","ouvre","assembl","ferme"]],
  2,
  "Couper le pain, ajouter la garniture, refermer le sandwich.")
```

Conseils :
- Écris les mots-clés **sans accents et en minuscules** : la réponse du joueur est normalisée avant la comparaison.
- Utilise `R(a, b, f)` pour générer une suite de lignes attendues, par exemple `R(1,5)` donne `["1","2","3","4","5"]`.
- Garde un ordre de difficulté croissant.

## Limites connues

- **Exécution du code du joueur** : `new Function` exécute n'importe quel code JavaScript écrit par le joueur. Une boucle infinie fait geler l'onglet. C'est acceptable pour un jeu d'apprentissage personnel, mais à sécuriser (Web Worker, délai maximum) pour un usage public.
- **Sauvegarde locale** : la progression est stockée dans le navigateur (`localStorage`). Elle est perdue si le joueur change d'appareil ou vide ses données.
- **Niveaux d'explication** : la correction par mots-clés est approximative. Une bonne réponse formulée avec d'autres mots peut être refusée.
- **Pas de classement** : les joueurs ne sont pas enregistrés sur un serveur.


