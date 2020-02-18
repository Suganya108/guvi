#  You are given with two arrays. Your task is to merge the array such that first array is in ascending order and second one in descending order.

n, m=[int(x) for x in input().split()]
a =[int(x) for x in input().split()]
d =[int(x) for x in input().split()]
a.sort()
d.sort(reverse=True)
s=a+d
for i in range(len(s)):
	print(s[i],end="")
	if i<len(s)-1:
		print(end=" ")
