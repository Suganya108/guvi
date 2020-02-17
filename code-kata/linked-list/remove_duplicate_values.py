# Given a linked list and a key,find the last occurrence of the key and delete it from the linked list. The list may have duplicate values.

num=int(input())
n = input().split()
m=input()
n.reverse()
d=n.index(m)
n.pop(d)
n.reverse()
for i in range(len(n)):
    print(n[i],end="")
    if(i<len(n)-1):
        print(end=" ")
