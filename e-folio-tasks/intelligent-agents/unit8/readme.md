# Creating Parse Trees

## Create a constituency-based parse tree for the following phrases:

The government raised interest rates.
The internet gives everyone a voice.
The man saw the dog with the telescope.

### The government raised interest rates.

NP = Noun Phrase, VP = Verb Phrase, PP = Prepositional Phrase, Det = Determiner.

```
                             Sentence
                                |
                  +-------------+-------------+
                  |                           |
                NP                          VP
                  |                           |
            +-----+----+             +--------+---------+
            |          |             |                  |
           Det         Noun          V                NP
            |           |            |                  |
            |           |            |            +-----+-----+
            |           |            |            |           |
           The      government      raised    +----+----+  Noun
                                                |        |   |
                                              rates    interest

```

Representing as a nested list

```
parse_tree_1 = ['Sentence',
               ['NP', ['Det', 'The'], ['Noun', 'government']],
               ['VP', ['V', 'raised'],
                      ['NP', ['Noun', 'interest'], ['Noun', 'rates']]]
```

### The internet gives everyone a voice.

NP = Noun Phrase, VP = Verb Phrase, PP = Prepositional Phrase, Det = Determiner.

```
                             Sentence
                                |
                  +-------------+-------------+
                  |                           |
                NP                          VP
                  |                           |
            +-----+----+             +--------+---------+
            |          |             |                  |
           Det        Noun          V                NP
            |           |            |                  |
            |           |            |            +-----+-----+
            |           |            |            |           |
           The      internet       gives     +----+----+   Pronoun
                                                |        |     |
                                             everyone   a voice

```

Representing as a nested list

```
parse_tree_2 = ['Sentence',
               ['NP', ['Det', 'The'], ['Noun', 'internet']],
               ['VP', ['V', 'gives'],
                      ['NP', ['Pronoun', 'everyone']],
                      ['NP', ['Det', 'a'], ['Noun', 'voice']]]]
```

### The man saw the dog with the telescope.

NP = Noun Phrase, VP = Verb Phrase, PP = Prepositional Phrase, Det = Determiner.

```
                              Sentence
                                 |
                   +-------------+-------------+
                   |                           |
                 NP                          VP
                   |                           |
            +------+-----+             +-------+-------+
            |            |             |               |
           Det          Noun           V              PP
            |            |             |               |
            |            |             |          +----+----+
            |            |             |          |         |
           The          man          saw       P   NP      Noun
                                                 |         |
                                              with      the telescope
```

Representing as a nested list

```
parse_tree_3 = ['Sentence',
               ['NP', ['Det', 'The'], ['Noun', 'man']],
               ['VP', ['V', 'saw'],
                      ['NP', ['Det', 'the'], ['Noun', 'dog']],
                      ['PP', ['P', 'with'],
                             ['NP', ['Det', 'the'], ['Noun', 'telescope']]]]]
```

NLP libraries often provide functions to generate, manipulate, and visualize parse trees in different formats, such as NLTK (Natural Language Toolkit) in Python.
