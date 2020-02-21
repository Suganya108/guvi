# Given a number N, print the sum of the squares of its digits.

n=input()
sum=0
for i in n:
	sum+=int(i)**2
print(sum,end='')
