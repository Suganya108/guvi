# Given a string print reverse all words except the first and last words.

s=input().split()
n=len(s)
for i in range(1,n-1):
  s[i]=s[i][::-1]
print(*s,end='')
