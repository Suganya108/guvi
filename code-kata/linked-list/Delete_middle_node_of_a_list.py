# Delete the middle node of a linked list and print the resulting linked list.


num=int(input())
n = [int(x) for x in input().split()] 
m=round(len(n)/2)
n.pop(m-1)
for i in range(len(n)):
    print(n[i],end="")
    if(i<len(n)-1):
        print(end=" ")
               
