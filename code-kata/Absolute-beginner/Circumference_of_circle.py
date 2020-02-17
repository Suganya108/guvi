# You are provided with the radius of a circle "A". Find the length of its circumference.

r=float(input())
if r<0:
	print("Error",end="")
else:
	c=2*3.142*r
	print(round(c,2),end="")
