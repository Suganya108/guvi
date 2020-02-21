# Given 2 strings S,X. Print the string after deleting X.If X not found print the same string.

s=input().split()
x=input()
c=s.count(x)
if c>0:
    i=s.index(x)
    s.pop(i)
print(*s,end='')
