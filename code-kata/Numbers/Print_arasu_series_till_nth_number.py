# Print arasu series till nth number

n=int(input())
pn=[]
s=0
for i in range(2,n*3):
    if(i>1):
        for j in range(2,i//2+1):
            if((i%j)==0):
                break
        else:
            pn.append(i)
for i in range(n):
    s=s+pn[i]
    print(s,end="")
    if i<n-1:
        print(end=" ")
