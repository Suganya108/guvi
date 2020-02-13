# Write a program to find sum of first and last digit of a number.

def fun(n):
    c=str(n)
    print(int(c[0])+int(c[-1]))
    return 0

n=int(input("Enter no. : "))
fun(n)
