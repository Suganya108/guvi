# Given a number N and an array of N elements ,find the Bitwise AND of the array elements.

n=int(input())
num=[int(x) for x in input().split()]
a=num[0]
for i in range(1,n):
	a=a & num[i]
print(a,end="")
