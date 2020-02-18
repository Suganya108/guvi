# Given 3 numbers A,B,C process and print 'yes' if they can form the sides of a triangle otherwise print 'no'.

a, b, c =[int(x) for x in input().split()]
if a+b>c and b+c>a and c+a>b:
	print("yes",end="")
else:
	print("no",end="")
