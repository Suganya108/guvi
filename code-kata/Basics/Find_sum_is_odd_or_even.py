# Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.

n, m=[int(x) for x in input().split()]
sum=n+m
if sum%2==0:
	print("even")
else:
	print("odd")
