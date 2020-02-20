# If ticket number is divisible by date of month. You are eligible for a discount.

# Print 1 if the ticket is eligible for discount else 0

n=int(input())
l=[int(x) for x in input().split()][:n]
d=int(input())
for i in range(n):
    if l[i]%d==0:
        print("1",end="")
    else:
        print("0",end="")
    if i<n-1:
        print(end=" ")
