# Named Entity Recognition (NER): NLP can be used to identify entities like names, locations,
# and organizations in text. The spaCy library in Python provides NER capabilities.

import spacy

nlp = spacy.load('en_core_web_sm')


def extract_entities(text):
    doc = nlp(text)
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    return entities


text = "Apple Inc. was founded by Steve Jobs in Cupertino."
print(extract_entities(text))
