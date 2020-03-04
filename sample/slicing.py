a=int(input("Enter init : "))
b=int(input("Enter end : "))
ar=[]
if((a%2)==0):
    s=a
else:
    s=a+1
for i in range(s,b+1,2):
    ar.append(i)
n=int(input("Enter no. to slice : "))
z=int(b-a+1)/2
y=round(z/n)
j=0
k=n
for i in range(1,y+1):
    print(ar[j:k:1])
    j=k
    k=k+n
