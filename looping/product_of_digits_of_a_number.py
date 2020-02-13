# Write a program to calculate product of digits of a number.

def fun(n):
    c=str(n)
    p=1
    for i in range(len(c)):
        p=p*int(c[i])

    print("Product is",p)
    return 0

n=int(input("Enter no. : "))
fun(n)
