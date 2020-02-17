# You are given three numbers A, B & C. Print the largest amongst these three numbers.

a=int(input())
b=int(input())
c=int(input())
if a>b and a>c:
	print(a,end="")
elif b>a and b>c:
	print(b,end="")
else:
	print(c,end="")
