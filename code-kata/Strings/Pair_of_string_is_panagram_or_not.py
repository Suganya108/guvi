# You are given two strings . Your task is to tell whether the pair of strings is panagram.
# A pair of strings are said to be panagram if they both are palindrome and are anagram of each other.

s1,s2=input().split()
p1=s1[::-1]
p2=s2[::-1]
if s1==p1 and s2==p2:
  print('1',end='')
else:
  print('0',end='')
