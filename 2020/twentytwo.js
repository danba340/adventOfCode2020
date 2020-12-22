const testInput = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`;

const input = `Player 1:
41
33
20
32
7
45
2
12
14
29
49
37
6
11
39
46
47
38
23
22
28
10
36
35
24

Player 2:
17
4
44
9
27
18
30
42
21
26
16
48
8
15
34
50
19
43
25
1
13
31
3
5
40`;

const createDecks = (input) => {
  const players = input.split('\n\n');
  const decks = players.map((player) => {
    const [p, cards] = player.split(':\n');
    return cards.split('\n').map((card) => parseInt(card));
  });
  return decks;
};

const runGame = (d1, d2) => {
  while (d1.length && d2.length) {
    const card1 = d1.shift();
    const card2 = d2.shift();
    if (card1 > card2) {
      d1.push(card1);
      d1.push(card2);
    } else if (card2 > card1) {
      d2.push(card2);
      d2.push(card1);
    } else {
      d1.push(card1);
      d2.push(card2);
    }
  }
  return d1.length ? d1 : d2;
};

const calculateScore = (deck) => {
  return deck.reduce((acc, card, index) => {
    return acc + card * (deck.length - index);
  }, 0);
};

const decks = createDecks(input);
const [d1, d2] = decks;
const winDeck = runGame(d1, d2);
const score = calculateScore(winDeck);
console.log(score);
