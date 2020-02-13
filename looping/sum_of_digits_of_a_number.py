# Write a program to calculate sum of digits of a number.


def fun(n):
    c=str(n)
    sum=0
    for i in range(len(c)):
        sum=sum+int(c[i])

    print("Sum is",sum)
    return 0

n=int(input("Enter no. : "))
fun(n)
