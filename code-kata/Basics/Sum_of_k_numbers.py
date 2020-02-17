# Write a program to print the sum of the first K natural numbers.

k=int(input())
sum=0
for i in range(1,k+1):
	sum=sum+i
print(sum,end="")
