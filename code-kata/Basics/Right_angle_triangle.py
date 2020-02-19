# Given 3 numbers A,B,C print 'yes' if they can form the sides of a right angled triangle,otherwise 'no'.

a, b, c = [int(x) for x in input().split()] 
if a>b and a>c:
    if a**2==b**2 + c**2:
        print("yes",end="")
    else:
        print("no",end="")
elif b>a and b>c:
    if b**2==a**2 + c**2:
        print("yes",end="")
    else:
        print("no",end="")
elif c>a and c>b:
    if c**2==b**2 + a**2:
        print("yes",end="")
    else:
        print("no",end="")
