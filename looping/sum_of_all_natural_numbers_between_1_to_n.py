# Write a program to find sum of all natural numbers between 1 to n

def na(n):
    sum=0
    for i in range(1,n+1):
        sum=sum+i
    print("sum of n nos. is ",sum)
    return 0

n=int(input("Enter n : "))
na(n)
