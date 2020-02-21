# You are given with string of words,we have to arrange them in reverse saturated order.

s=input().split()
n=len(s)
for i in range(n):
  s[i]=s[i][::-1]
print(*s,end='')
