# Given a number N and array of N integers, print the difference between the indices of smallest and largest number.

n=int(input())
a = [int(x) for x in input().split()][:n]
m1=a.index(max(a))
m2=a.index(min(a))
print(m1-m2,end="")
