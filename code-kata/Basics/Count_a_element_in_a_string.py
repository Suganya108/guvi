# Given 2 numbers N and K followed by N elements,print the number of repetition of K otherwise print '-1' if the element not found.

N, K =input().split()
l =input().split()
n=l.count(K)
print(n-1,end="")
