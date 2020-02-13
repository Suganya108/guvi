# Write a program to enter a number and print its reverse.

def fun(n):
    c=str(n)
    print(c[::-1])
    return 0

n=int(input("Enter no. : "))
fun(n)
