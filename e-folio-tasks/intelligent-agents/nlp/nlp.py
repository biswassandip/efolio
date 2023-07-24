# Language Translation: NLP libraries like Google Translate API or the Translate package in Python can be used for language translation tasks.

from googletrans import Translator

translator = Translator()
text = "Hello, how are you?"
translated_text = translator.translate(text, src='en', dest='fr')
print(translated_text.text)  # Output: "Bonjour, comment allez-vous?"
