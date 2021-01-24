import sys

def redirect_to_file(text):
    original = sys.stdout
    sys.stdout = open('./blah.txt', 'w')
    print('this is your redirected text: ')
    print(text)
    sys.stdout = original

    print('this string goes to stdout, not the file!')

def readTextFile():
    print("We are going to read a file now")
    f = open("fileToRead.txt", "r")
    print(f.read())

redirect_to_file('python rocks!')
readTextFile();
