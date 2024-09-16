import re

def main():
  # Copy text from "starwars_script.txt" into a list of strings
  with open("starwars_script.txt", "r") as in_file:
    all_strings = re.split(r"[.,!?:;\s-]", in_file.read())
      
  # Confirm strings are words
  unique_words = []
  for i in range(len(all_strings)):
    if  all_strings[i].isalpha() == True:
      single_word = all_strings[i].lower()
      unique_check(single_word, unique_words)

  # Append all unique_words to "unique_starwars_words.txt"
  length = len(unique_words)
  with open ("separatedScript.txt", "a") as out_file:
    out_file.write('[')
    for i in range(length - 1):
      out_file.write('"' + unique_words[i] + '", ')
      out_file.write('"' + unique_words[length - 1] + '"' + ']')


# Check if word is unique and append
def unique_check(word, unique_words):
  if word not in unique_words:
    unique_words.append(word)
    
main()