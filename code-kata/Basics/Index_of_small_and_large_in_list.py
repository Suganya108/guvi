# Given a number N followed by N numbers.
# Find the smallest number and largest number and print both the indices(1 based indexing).

num=int(input())
n = input().split()
s=min(n)
l=max(n)
print(n.index(s)+1,end=" ")
print(n.index(l)+1,end="")
