# You are given the coefficients of a quadratic equation in order A, B & C.
# Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.
# Write a program to find all of the roots of the quadratic.

import math
a, b, c = [float(x) for x in input().split()] 
s=math.sqrt((b*b)-(4*a*c))
x=round((-b+s)/2*a,2)
y=round((-b-s)/2*a,2)
print("%.2f" %x)
print("%.2f" %y,end="")
