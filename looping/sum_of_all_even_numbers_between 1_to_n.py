# Write a program to find sum of all even numbers between 1 to n.

def na(n):
    sum=0
    for i in range(2,n+1,2):
        sum=sum+i
    print("sum of even nos. is ",sum)
    return 0

n=int(input("Enter n : "))
na(n)
