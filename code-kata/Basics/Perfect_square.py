# Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.

N, M=[int(x) for x in input().split()]
n=N*M
sum = 0
for i in range(1, N+1):
    n1=i**2
    if (n1 == n):
        sum=sum+1
if(sum>0):
    print("yes",end="")
else:
    print("no",end="")
