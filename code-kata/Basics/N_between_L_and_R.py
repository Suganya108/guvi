# Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.

n=int(input())
l, r = [int(x) for x in input().split()] 

if n>l and r>l:
	print("yes",end="")
else:
	print("no",end="")
