# Write a program to print multiplication table of any number.

def fun(n):
    for i in range(1,11):
        a=i*n
        print(i," * ",n," = ",a)


n=int(input("enter:"))
fun(n)
