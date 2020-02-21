# Given a string and a number K.Print every kth character from the beginning.

s,n=input().split()
for i in range(int(n)-1,len(s),int(n)):
  print(s[i],end='')
  if i<len(s)-1:
    print(end=' ')
