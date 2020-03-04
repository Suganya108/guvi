def na(n,p):
    ans=1
    for i in range(1,p+1):
        ans=ans*n
    print(n," power ",p," is ",ans)
    return 0

n=int(input("Enter n : "))
p=int(input("Enter p : "))
na(n,p)
