# You are given an array of ids of prisoners. The jail authority found that there are some prisoners of same id.
# Your task is to help the authority in finding the common ids.

n=int(input())
l =[int(x) for x in input().split()]
c=0
r=[]
for i in range(len(l)):
    for j in range(i+1,len(l)):
        if(l[i]==l[j]):
            r.append(l[i])
            c=1
for i in range(len(r)):
    print(r[i],end="")
    if i<len(r)-1:
        print(end=" ")
if c==0:
    print("-1",end="")
