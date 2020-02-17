# Given a number N, print 'yes' if it is composite else print 'no'.

a=int(input())
if(a>1):
    for i in range(2,a//2+1):
        if((a%i)==0):
            print("yes",end="")
            break
    else:
        print("no",end="")
else:
    print("yes",end="")
