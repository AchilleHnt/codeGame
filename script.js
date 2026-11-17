
const R = (a, b, f = (x) => x) =>
    Array.from({ length: b - a + 1 }, (_, i) => String(f(a + i)));
const O = (t, g, s, h, o) => ({ t, g, s, h, o });
const F = (t, g, f, p, h, T) => ({
    t,
    g,
    h,
    f,
    p,
    T,
    s: "function " + f + "(" + p + ") {\n  // à toi de jouer\n}\n",
});
const Q = (t, g, h, a) => ({ t, g, h, q: 1, a: String(a) });
const E = (t, g, h, K, need, sol) => ({ t, g, h, e: 1, K, need, sol });
const LEVELS = [
    O(
        "Code · Hello World",
        "Affiche exactement Hello World avec console.log().",
        "// Écris ton code ici\n",
        'Essaie : console.log("Hello World");',
        ["Hello World"],
    ),
    O(
        "Code · La boucle",
        "Avec une boucle, affiche les nombres de 1 à 5, un par ligne.",
        "// Utilise une boucle for\n",
        "for (let i = 1; i <= 5; i++) { console.log(i); }",
        R(1, 5),
    ),
    F(
        "Code · La fonction",
        "Écris une fonction somme(a, b) qui retourne l’addition de a et b.",
        "somme",
        "a, b",
        "Utilise return a + b;",
        [
            [[2, 3], 5],
            [[-1, 1], 0],
            [[10, 20], 30],
        ],
    ),
    O(
        "Code · Les variables",
        "Crée une variable age égale à 20, puis affiche exactement : Tu as 20 ans",
        "// Crée la variable, puis affiche le texte\n",
        'console.log("Tu as " + age + " ans");',
        ["Tu as 20 ans"],
    ),
    E(
        "Explique · Un algorithme du quotidien",
        "Comment prépares-tu une tasse de thé ? Décris les étapes dans l’ordre.",
        "Pense à l’eau, à la chaleur, au sachet et à la tasse.",
        [
            ["eau"],
            ["chauff", "bouill"],
            ["sachet", "feuille", "infus"],
            ["tasse", "verse", "boire"],
        ],
        3,
        "Chauffer l’eau, mettre le sachet dans la tasse, verser l’eau chaude, laisser infuser, retirer le sachet. Une suite d’étapes précises dans l’ordre, c’est un algorithme.",
    ),
    Q(
        "Logique · La suite",
        "Quel nombre complète la suite : 2, 4, 6, 8, … ?",
        "Regarde l’écart entre deux nombres successifs.",
        10,
    ),
    O(
        "Code · Les nombres pairs",
        "Affiche les nombres pairs de 1 à 10, un par ligne.",
        "// Un nombre est pair si i % 2 === 0\n",
        "Dans ta boucle : if (i % 2 === 0) { console.log(i); }",
        R(1, 5, (x) => x * 2),
    ),
    F(
        "Code · Pair ou impair",
        "Écris estPair(n) qui retourne true si n est pair, sinon false.",
        "estPair",
        "n",
        "return n % 2 === 0;",
        [
            [[4], true],
            [[7], false],
            [[0], true],
        ],
    ),
    Q(
        "Logique · Les pommes",
        "J’ai 3 pommes. J’en mange 1, puis j’en achète 5. Combien en ai-je ?",
        "Fais les opérations dans l’ordre : 3 − 1 + 5.",
        7,
    ),
    E(
        "Explique · La boucle",
        "Avec tes mots, explique à un débutant à quoi sert une boucle.",
        "Pense à répéter, à une condition d’arrêt.",
        [
            ["repet"],
            ["plusieurs fois", "chaque", "n fois", "meme", "encore"],
            ["condition", "compteur", "arret", "jusqu", "fin"],
        ],
        2,
        "Une boucle répète les mêmes instructions plusieurs fois, jusqu’à ce qu’une condition d’arrêt soit atteinte, au lieu de réécrire le code à chaque fois.",
    ),
    O(
        "Code · Table de 3",
        "Affiche la table de 3 : 3, 6, 9… jusqu’à 30, un nombre par ligne.",
        "// Boucle de 1 à 10 et multiplie par 3\n",
        "for (let i = 1; i <= 10; i++) { console.log(i * 3); }",
        R(1, 10, (x) => x * 3),
    ),
    E(
        "Explique · Le plus grand de trois",
        "Tu as 3 nombres écrits sur 3 papiers. Explique comment trouver le plus grand.",
        "Garde en tête un « champion » et compare-le aux autres.",
        [
            ["garde", "retien", "memoris", "conserv", "champion", "note"],
            ["compar"],
            ["chaque", "tous", "suivant", "un par un", "ensuite", "autre"],
        ],
        2,
        "Prendre le 1er nombre comme meilleur, le comparer au 2e et garder le plus grand, puis comparer ce gagnant au 3e. Le gagnant final est le plus grand.",
    ),
    F(
        "Code · Le plus grand",
        "Écris max(a, b) qui retourne le plus grand des deux nombres.",
        "max",
        "a, b",
        "Utilise if (a > b) ou Math.max(a, b).",
        [
            [[3, 9], 9],
            [[-2, -8], -2],
            [[4, 4], 4],
        ],
    ),
    Q(
        "Logique · Une suite célèbre",
        "Quel nombre complète : 1, 1, 2, 3, 5, 8, … ?",
        "Chaque nombre est la somme des deux précédents.",
        13,
    ),
    F(
        "Algo · Inverser un texte",
        "Écris inverser(txt) qui retourne le texte à l’envers. Ex : « abc » → « cba ».",
        "inverser",
        "txt",
        'Parcours le texte de la fin vers le début, ou : txt.split("").reverse().join("")',
        [
            [["abc"], "cba"],
            [["Bénin"], "nînéB"],
            [[""], ""],
        ],
    ),
    O(
        "Algo · Somme de 1 à 100",
        "Calcule et affiche la somme de tous les nombres de 1 à 100.",
        "let total = 0;\n",
        "Dans une boucle : total += i; puis console.log(total) à la fin.",
        ["5050"],
    ),
    Q(
        "Logique · Les carrés",
        "Quel nombre complète : 1, 4, 9, 16, … ?",
        "1×1, 2×2, 3×3, 4×4…",
        25,
    ),
    F(
        "Algo · Compter les voyelles",
        "Écris compterVoyelles(txt) : nombre de voyelles (a, e, i, o, u), majuscules ou minuscules.",
        "compterVoyelles",
        "txt",
        'Passe le texte en minuscules, puis teste chaque lettre avec "aeiou".includes(lettre).',
        [
            [["bonjour"], 3],
            [["xyz"], 0],
            [["AEI"], 3],
        ],
    ),
    O(
        "Algo · FizzBuzz",
        "De 1 à 15 : affiche Fizz si multiple de 3, Buzz si multiple de 5, FizzBuzz si les deux, sinon le nombre.",
        "// Teste d’abord le multiple de 15\n",
        "if (i % 15 === 0) … else if (i % 3 === 0) … else if (i % 5 === 0) …",
        R(1, 15, (x) =>
            x % 15 === 0
                ? "FizzBuzz"
                : x % 3 === 0
                    ? "Fizz"
                    : x % 5 === 0
                        ? "Buzz"
                        : x,
        ),
    ),
    E(
        "Explique · Chasse au bug",
        "for (let i = 1; i < 5; i++) { console.log(i); } affiche 1 à 4, mais on voulait 1 à 5. Explique l’erreur et la correction.",
        "Regarde la condition de la boucle.",
        [
            [
                "condition",
                "<",
                "inferieur",
                "strict",
                "s’arrete",
                "s'arrete",
                "stop",
            ],
            ["<=", "egal", "inclu", "6"],
        ],
        2,
        "La condition i < 5 arrête la boucle avant 5. Il faut i <= 5 (ou i < 6).",
    ),
    Q(
        "Algo · Combien de tours ?",
        "for (let i = 0; i < 5; i++) { … } — combien de fois le corps de la boucle s’exécute-t-il ?",
        "i prend les valeurs 0, 1, 2, 3, 4.",
        5,
    ),
    F(
        "Algo · Factorielle",
        "Écris factorielle(n) : 5! = 5×4×3×2×1 = 120. Et 0! = 1.",
        "factorielle",
        "n",
        "Commence avec r = 1 puis multiplie par chaque nombre de 1 à n.",
        [
            [[5], 120],
            [[0], 1],
            [[3], 6],
        ],
    ),
    F(
        "Algo · Palindrome",
        "Écris estPalindrome(mot) : true si le mot se lit pareil dans les deux sens (kayak).",
        "estPalindrome",
        "mot",
        "Compare le mot avec son inverse.",
        [
            [["kayak"], true],
            [["code"], false],
            [["radar"], true],
        ],
    ),
    Q(
        "Logique · Le train",
        "Un train part à 14h00 et arrive à 17h30. Quelle est la durée du trajet en minutes ?",
        "3 heures et 30 minutes.",
        210,
    ),
    F(
        "Algo · Le minimum",
        "Écris minTableau(t) qui retourne le plus petit nombre d’un tableau.",
        "minTableau",
        "t",
        "Garde en mémoire le plus petit vu jusqu’ici en parcourant t.",
        [
            [[[4, 2, 9]], 2],
            [[[7]], 7],
            [[[-1, 5, 0]], -1],
        ],
    ),
    F(
        "Algo · La moyenne",
        "Écris moyenne(t) : la moyenne des nombres d’un tableau.",
        "moyenne",
        "t",
        "Somme des éléments divisée par t.length.",
        [
            [[[10, 20, 30]], 20],
            [[[5]], 5],
            [[[1, 2]], 1.5],
        ],
    ),
    Q(
        "Algo · Le tri",
        "On trie [5, 2, 8, 1] du plus petit au plus grand. Quel est le 2e élément ?",
        "Le tableau trié est [1, …].",
        2,
    ),
    F(
        "Code · Compter les mots",
        "Écris compterMots(phrase) : nombre de mots, séparés par des espaces.",
        "compterMots",
        "phrase",
        'phrase.split(" ").length',
        [
            [["bonjour tout le monde"], 4],
            [["a"], 1],
            [["un deux"], 2],
        ],
    ),
    F(
        "Algo · Nombre premier",
        "Écris estPremier(n) : true si n n’est divisible que par 1 et lui-même (1 n’est pas premier).",
        "estPremier",
        "n",
        "Teste les diviseurs de 2 jusqu’à n − 1 avec n % d === 0.",
        [
            [[7], true],
            [[9], false],
            [[2], true],
            [[1], false],
        ],
    ),
    E(
        "Explique · La pièce plus lourde",
        "8 pièces identiques d’apparence, une est plus lourde. Avec une balance à 2 plateaux, comment la trouver en 2 pesées ?",
        "Sépare les pièces en groupes, pas une par une.",
        [
            ["3", "trois"],
            ["balance", "pese", "compar"],
            ["equilibre", "egal", "plus lourd", "penche", "descend"],
        ],
        2,
        "Peser 3 pièces contre 3. Si ça penche, la lourde est dans ce groupe de 3 ; sinon elle est parmi les 2 restantes. Peser alors 1 contre 1 (ou 2 pièces entre elles) pour la trouver.",
    ),
    Q(
        "Logique · Les âges",
        "J’ai 12 ans. Mon frère a le double de mon âge. Quel âge aura-t-il dans 3 ans ?",
        "Son âge actuel : 24.",
        27,
    ),
    F(
        "Algo · Fibonacci",
        "Écris fibonacci(n) : 0, 1, 1, 2, 3, 5, 8… (fibonacci(0)=0, fibonacci(1)=1).",
        "fibonacci",
        "n",
        "Garde les deux derniers termes et avance n fois.",
        [
            [[0], 0],
            [[1], 1],
            [[6], 8],
            [[10], 55],
        ],
    ),
    F(
        "Algo · Le PGCD",
        "Écris pgcd(a, b) : le plus grand diviseur commun (algorithme d’Euclide).",
        "pgcd",
        "a, b",
        "Tant que b ≠ 0 : [a, b] = [b, a % b]. Le résultat est a.",
        [
            [[12, 18], 6],
            [[7, 3], 1],
            [[100, 75], 25],
        ],
    ),
    E(
        "Explique · Page blanche",
        "Un site web affiche une page blanche. Explique comment tu cherches l’origine du problème.",
        "Pense aux messages d’erreur et à tester étape par étape.",
        [
            ["console", "erreur", "log", "message"],
            ["isole", "teste", "etape", "un par un", "verifi", "commenc"],
            ["reseau", "serveur", "fichier", "code", "requete"],
        ],
        2,
        "Ouvrir la console du navigateur pour lire les erreurs, vérifier que les fichiers et requêtes se chargent (onglet Réseau), puis isoler la partie fautive en testant le code morceau par morceau.",
    ),
    F(
        "Algo · Doublons",
        "Écris contientDoublon(t) : true si une valeur apparaît deux fois dans le tableau.",
        "contientDoublon",
        "t",
        "Mémorise les valeurs déjà vues (par ex. avec un Set).",
        [
            [[[1, 2, 3, 2]], true],
            [[[1, 2, 3]], false],
            [[[[]]], false],
        ],
    ),
    E(
        "Explique · Un mot de passe solide",
        "Quelles règles faut-il vérifier pour dire qu’un mot de passe est solide ?",
        "Longueur, types de caractères…",
        [
            ["longueur", "long", "caracteres", "8", "12"],
            ["majuscule", "minuscule"],
            ["chiffre", "nombre"],
            ["symbole", "special"],
        ],
        3,
        "Au moins 8 à 12 caractères, avec majuscules et minuscules, des chiffres et des symboles, sans mot courant ni date de naissance.",
    ),
    F(
        "Algo · Binaire",
        'Écris binaire(n) qui retourne n en base 2, sous forme de texte. Ex : 5 → "101".',
        "binaire",
        "n",
        "Divise n par 2 en gardant les restes, puis lis-les à l’envers (ou n.toString(2)).",
        [
            [[5], "101"],
            [[8], "1000"],
            [[0], "0"],
        ],
    ),
    E(
        "Explique · Le dictionnaire",
        "Comment trouves-tu très vite un mot dans un dictionnaire papier ?",
        "Tu ne lis pas toutes les pages du début.",
        [
            ["milieu", "moitie", "ouvr", "coup"],
            ["avant", "apres", "alphab"],
            ["repet", "recommenc", "encore", "reduit", "elimin"],
        ],
        2,
        "J’ouvre au milieu, je regarde si le mot est avant ou après (ordre alphabétique), j’élimine la moitié inutile et je recommence sur l’autre moitié jusqu’à trouver le mot.",
    ),
    Q(
        "Algo · Recherche dichotomique",
        "Je pense à un nombre entre 1 et 100. En coupant l’intervalle en deux à chaque question, combien de questions faut-il au maximum ?",
        "100 → 50 → 25 → 13 → 7 → 4 → 2 → 1.",
        7,
    ),
    E(
        "Explique · Ranger des cartes",
        "Tu as 5 cartes numérotées en désordre. Explique comment les ranger du plus petit au plus grand.",
        "Compare, déplace, et recommence.",
        [
            ["compar", "plus petit", "minimum"],
            ["echang", "permut", "inser", "place", "deplace"],
            ["repet", "recommenc", "chaque", "tous", "jusqu"],
        ],
        2,
        "Chercher la plus petite carte et la mettre en premier, puis la plus petite des restantes en deuxième, et ainsi de suite jusqu’à ce que tout soit rangé (tri par sélection).",
    ),
    F(
        "Algo · Trier",
        "Écris trier(t) qui retourne le tableau trié du plus petit au plus grand.",
        "trier",
        "t",
        "Attention : .sort() trie en texte par défaut. Utilise .sort((a, b) => a - b).",
        [
            [[[5, 2, 8, 1]], [1, 2, 5, 8]],
            [[[3, 3, 1]], [1, 3, 3]],
        ],
    ),
];
const $ = (id) => document.getElementById(id);
let me = null,
    lvl = 0,
    max = 0;
function load() {
    try {
        const r = localStorage.getItem("cq");
        if (r) return JSON.parse(r);
    } catch (e) { }
    return null;
}
function save() {
    try {
        localStorage.setItem("cq", JSON.stringify({ me, max }));
    } catch (e) { }
}
function show(id) {
    ["register", "game", "end"].forEach((x) =>
        $(x).classList.toggle("hidden", x !== id),
    );
}
function runCode(code, nm) {
    const out = [];
    const c = { log: (...a) => out.push(a.map(String).join(" ")) };
    try {
        const f = new Function(
            "console",
            code +
            "\nreturn " +
            (nm ? "typeof " + nm + "==='function'?" + nm + ":null" : "null") +
            ";",
        );
        const r = f(c);
        return { out, fn: r };
    } catch (e) {
        return { out, err: e.message };
    }
}
function render() {
    const L = LEVELS[lvl];
    show("game");
    $("who").textContent = "👤 " + me.prenom + " " + me.nom;
    $("lvlinfo").textContent =
        "Niveau " + (lvl + 1) + " / " + LEVELS.length;
    $("bar").innerHTML = LEVELS.map(
        (_, i) =>
            '<i class="' +
            (i < max ? "done" : i === lvl ? "on" : "") +
            '"></i>',
    ).join("");
    $("title").textContent = "Niveau " + (lvl + 1) + " — " + L.t;
    $("goal").textContent = L.g;
    $("code").value = L.s || "";
    $("cols").classList.toggle("hidden", !!(L.q || L.e));
    $("ans").classList.toggle("hidden", !L.q);
    $("exp").classList.toggle("hidden", !L.e);
    $("ans").value = "";
    $("exp").value = "";
    $("run").textContent = L.q
        ? "✔ Valider"
        : L.e
            ? "✔ Valider ma méthode"
            : "▶ Exécuter";
    $("out").textContent = "Clique sur « Exécuter ».";
    $("hint").textContent = "💡 " + L.h;
    $("hint").classList.add("hidden");
    $("msg").classList.add("hidden");
    $("next").classList.add("hidden");
}
function say(ok, t) {
    const m = $("msg");
    m.className = "msg " + (ok ? "ok" : "ko");
    m.textContent = t;
}
function explain(L) {
    const t = $("exp")
        .value.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    if (t.trim().length < 40) {
        say(
            false,
            "Ta réponse est trop courte : décris ta méthode étape par étape.",
        );
        return;
    }
    const ok = L.K.filter((g) => g.some((w) => t.includes(w))).length;
    if (ok < L.need) {
        say(
            false,
            "Il manque encore des idées importantes. Relis l’énoncé et l’indice, puis complète ta méthode.",
        );
        return;
    }
    win();
    $("msg").textContent = "🎉 Bien vu ! Solution type : " + L.sol;
}
function answer(L) {
    const n = (s) =>
        String(s).toLowerCase().replace(/\s/g, "").replace(",", ".");
    if (n($("ans").value) === n(L.a)) {
        win();
    } else say(false, "Ce n’est pas la bonne réponse, réfléchis encore.");
}
$("ans").addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("run").click();
});
$("start").onclick = () => {
    const nom = $("nom").value.trim(),
        prenom = $("prenom").value.trim();
    if (!nom || !prenom) {
        $("regerr").classList.remove("hidden");
        return;
    }
    me = { nom, prenom };
    lvl = 0;
    max = 0;
    save();
    render();
};
$("hintbtn").onclick = () => $("hint").classList.toggle("hidden");
$("run").onclick = () => {
    const L = LEVELS[lvl];
    if (L.q) {
        return answer(L);
    }
    if (L.e) {
        return explain(L);
    }
    const r = runCode($("code").value, L.f);
    if (r.err) {
        $("out").textContent = "Erreur : " + r.err;
        say(false, "Il y a une erreur dans ton code.");
        return;
    }
    let err = null;
    if (L.f) {
        if (!r.fn) {
            err = "La fonction " + L.f + " n’existe pas.";
        } else {
            const lines = [];
            for (const [a, e] of L.T) {
                let v;
                try {
                    v = r.fn(...JSON.parse(JSON.stringify(a)));
                } catch (x) {
                    v = "erreur";
                }
                const ok = JSON.stringify(v) === JSON.stringify(e);
                lines.push(
                    L.f +
                    "(" +
                    a.map((x) => JSON.stringify(x)).join(", ") +
                    ") → " +
                    JSON.stringify(v) +
                    (ok ? " ✓" : " ✗ (attendu " + JSON.stringify(e) + ")"),
                );
                if (!ok) err = "Un test ne passe pas.";
            }
            $("out").textContent = lines.join("\n");
        }
    } else {
        $("out").textContent = r.out.length
            ? r.out.join("\n")
            : "(rien n’est affiché)";
        err =
            r.out.join("\n") === L.o.join("\n")
                ? null
                : "Ce n’est pas encore le résultat attendu.";
    }
    if (err) {
        say(false, err);
        return;
    }
    win();
};
function win() {
    max = Math.max(max, lvl + 1);
    save();
    say(true, "🎉 Bravo, niveau réussi !");
    $("next").textContent =
        lvl === LEVELS.length - 1 ? "Terminer 🏁" : "Niveau suivant →";
    $("next").classList.remove("hidden");
    $("bar").children[lvl].className = "done";
}
$("next").onclick = () => {
    if (lvl < LEVELS.length - 1) {
        lvl++;
        render();
    } else {
        $("endtitle").textContent = "🏆 Félicitations " + me.prenom + " !";
        show("end");
    }
};
$("restart").onclick = () => {
    lvl = 0;
    max = 0;
    save();
    render();
};
$("code").addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        e.preventDefault();
        const t = e.target,
            s = t.selectionStart;
        t.value = t.value.slice(0, s) + "  " + t.value.slice(t.selectionEnd);
        t.selectionStart = t.selectionEnd = s + 2;
    }
});
const saved = load();
if (saved && saved.me) {
    me = saved.me;
    max = saved.max || 0;
    lvl = Math.min(max, LEVELS.length - 1);
    render();
} else show("register");
