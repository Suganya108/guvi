# Given a string S, print 'yes' if it has a vowel in it else print 'no'.

s=input()
c=s.count('a') or s.count('e') or s.count('i') or s.count('o') or s.count('u')
if c>0:
    print('yes',end="")
else:
    print('no',end="")
