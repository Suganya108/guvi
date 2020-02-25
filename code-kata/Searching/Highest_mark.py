# First line contains count of marks. Next line is the list of marks obtained by Rajesh.
# Highest marks obtained by Rajesh.

n=int(input())
m=[int(x) for x in input().split()][:n]
print(max(m),end='')
