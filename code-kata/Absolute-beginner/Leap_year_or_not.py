# Let "A" be a year, write a program to check whether this year is a leap year or not.

year=int(input())
if (year % 4) == 0:
    if (year % 100) == 0:
        if (year % 400) == 0:
           print("Y",end="")
        else:
           print("N",end="")
    else:
       print("Y",end="")
else:
    print("N",end="")
