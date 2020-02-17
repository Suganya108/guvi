# Given a linked list to you now reverse a linked list and return the root of the linked list

n=int(input())
l = input().split()
l.reverse()
for i in range(n):
	print(l[i],end="")
	if(i<n-1):
		print(end=" ")
