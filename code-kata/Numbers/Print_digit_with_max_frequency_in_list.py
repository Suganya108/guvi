# You are given an array of digits. Your task is to print the digit with maximum frequency.

import collections
n=int(input())
a = [int(x) for x in input().split()][:n]
counter=collections.Counter(a)
a=counter.most_common(1)
b=a[0]
print(b[0],end="")
