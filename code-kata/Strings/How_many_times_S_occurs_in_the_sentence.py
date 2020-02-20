# Given a sentence and string S, find how many times S occurs in the given sentence.If S is not found in the sentence print -1

s=input()
S=input()
c=s.count(S)
if c==0:
  print('-1',end='')
else:
  print('1',end='')
