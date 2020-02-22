# Print all the dfg numbers upto index ‘n’.
# A dfg number is a number whose prime factors are only 2,3 or 5.

n=int(input())
l=[1]
for i in range(1,n*4):
	if i%2==0 or i%3==0 or i%5==0:
		 l.append(i)
for i in range(n):
	print(l[i],end="")
	if i<n-1:
		print(end=" ")
