# To Print Prime numbers in a list and non-prime numbers in another list from the given numbers

n=int(input("Enter no. of elements : "))
pn=[]
npn=[]
for i in range(0,n):
    a=int(input("Enter : "))
    if(a>1):
        for i in range(2,a//2+1):
            if((a%i)==0):
                npn.append(a)
                break
        else:
            pn.append(a)
print("Prime Number List : ",pn)
print("Non-Prime Number List : ",npn)
