# Given a number N, find the number of ones in its binary representation.

n=int(input())
b=bin(n)
print(str(b).count('1'),end='')
