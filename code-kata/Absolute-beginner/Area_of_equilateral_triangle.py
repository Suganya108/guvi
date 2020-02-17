#  The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.


import math
a=float(input())
s=math.sqrt(3)
print(round((1/4)*a*a*s,2),end="")
