# Given an array of N elements switch(swap) the element with the adjacent element and print the output.

n=int(input())
l=[int(x) for x in input().split()][:n]
for i in range(0,n-1,2):
    l[i], l[i+1] = l[i+1], l[i]
for i in range(n):
    print(l[i],end="")
    if i<n-1:
        print(end=" ")
