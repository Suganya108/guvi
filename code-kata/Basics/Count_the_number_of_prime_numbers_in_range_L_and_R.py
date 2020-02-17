# Given a range of 2 numbers (i.e) L and R count the number of prime numbers in the range (inclusive of L and R ).

l, r=[int(x) for x in input().split()] 
pn=[]
for i in range(l,r+1):
    if(i>1):
        for j in range(2,i//2+1):
            if((i%j)==0):
                
                break
        else:
            pn.append(i)
print(len(pn),end="")
