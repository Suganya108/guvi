# You are given some words all in lower case letters your task is to print them in sorted order.

s=input().split()
s.sort()
for i in range(len(s)):
  print(s[i],end='')
  if i<len(s)-1:
    print(end=' ')
