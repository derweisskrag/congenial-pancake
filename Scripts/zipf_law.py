import sys
import re
from collections import Counter

# Normalize word forms (customize this as needed)
NORMALIZATION_MAP = {
    "don't": "do not",
    "can't": "can not",
    "he's": "he",
    "she's": "she",
    "it's": "it",
    "i'll": "i",
    "that's": "that",
    "ain't": "is not",
    "i'd": "i",
    "he'd": "he",
    "she'd": "she",
    "won't": "will not",
    "martin's": "martin",
    "ruth's": "ruth",
}

def normalize_word(word):
    """Normalize contractions and word forms."""
    return NORMALIZATION_MAP.get(word.lower(), word.lower())

def process_text(file_path):
    """Read and preprocess the text file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        text = file.read()
    
    # Replace contractions and normalize words
    for contraction, replacement in NORMALIZATION_MAP.items():
        text = text.replace(contraction, replacement)
    
    # Remove punctuation and split into words
    text = re.sub(r'[^\w\s]', '', text)
    words = text.lower().split()
    return words

def zipf_law_analysis(words, top_n):
    """Analyze word frequencies and compare with Zipf's law."""
    word_counts = Counter(words)
    most_common = word_counts.most_common(top_n)
    
    # Compute Zipf's law predictions
    max_frequency = most_common[0][1] if most_common else 0
    zipf_predictions = [max_frequency // (i + 1) for i in range(top_n)]
    
    return most_common, zipf_predictions

def main(file_path, top_n):
    words = process_text(file_path)
    most_common, zipf_predictions = zipf_law_analysis(words, top_n)
    
    print(f"CHECKING THE ZIPF's LAW\n")
    print("The first column is the number of corresponding words in the text,")
    print("and the second column is the number of words which should occur in the text according to Zipf's law.\n")
    print("The most popular words in the text are:")
    for i, ((word, actual), predicted) in enumerate(zip(most_common, zipf_predictions)):
        print(f"{word:<8} {actual:<8} {predicted:<8}")
    
    # List unprocessed short forms
    print("\nThe most popular still remaining short forms in the text are:")
    all_words = Counter(words)
    unprocessed = [
        word for word in all_words.keys() if "'" in word or word.endswith("'s")
    ]
    unprocessed = Counter(unprocessed).most_common(top_n)
    for word, count in unprocessed:
        print(f"{word:<8} {count:<8}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python zipf_law.py <file_path> <top_n>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    top_n = int(sys.argv[2])
    main(file_path, top_n)
