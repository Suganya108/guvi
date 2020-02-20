# Given 2 arrays print 'yes' if they are mirror images of each other,otherwise 'no'.
 
n=int(input())
l=[int(x) for x in input().split()][:n]
m=[int(x) for x in input().split()][:n]
s=[]
s=l[::-1]
if s==m:
    print("yes",end="")
else:
    print("no",end="")
