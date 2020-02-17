# Given 3 numbers A,B,C print 'yes' if they can form the sides of a scalene triangle else print 'no'.

a, b, c=[int(x) for x in input().split()] 
if a!=b and b!=c:
	print("yes",end="")
else:
	print("no",end="")
