
# Write a program to swap first and last digits of a number.


def fun(n):
    c=str(n)
    c[0],c[-1]=c[-1],c[0]
    print(c)
    return 0

n=int(input("Enter no. : "))
fun(n)
