# A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5
# Print 1 if array is beautiful and 0 if it is not

n=int(input())
l=[int(x) for x in input().split()][:n]
sum=0
for i in range(n):
    sum=sum+l[i]
if sum%2==0 and sum%3==0 and sum%5==0:
    print("1",end="")
else:
    print("0",end="")
