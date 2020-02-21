# Given 2 numbers N,K and an array of N integers, find if the element K exists in the array.

n,k=input().split()
l=input().split()
c=l.count(k)
if c>0:
	print('yes',end='')
else:
	print('no',end='')
