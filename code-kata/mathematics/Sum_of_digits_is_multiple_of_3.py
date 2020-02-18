# You are given a task to tell whether the number is pure or not. A pure number is a number whose sum of digits is multiple of 3.

n=input()
sum=0
for i in range(0,len(n)):
	sum=sum+int(n[i])
if(sum%3==0):
	print("yes",end="")
else:
	print("not",end="")
