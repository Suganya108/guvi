import hashlib
u='user'
p='password'
pas=hashlib.sha256(p.encode()).hexdigest()
def bal():
    AP=5000
    n=0
    while(n==0):
        print("1. Balance")
        print("2. Withdraw")
        print("3. Deposite")
        print("4. Exit")
        c=input("Enter Your Option : ")
        if c=='1':
            print("Balance : ",AP)
            n=0
        elif c=='3':
            a=int(input("Enter Amount : "))
            AP=AP+a
            n=0
        elif c=='2':
            n=0
            a=int(input("Enter Amount : "))
            if a<=AP:
                AP=AP-a
            else:
                print("Insufficient Balance")
        elif c=='4':
            n=1
            print("Thank You")
            break
        else:
            print("Invalid Option! Enter a Valid Option")        
    return 0

def atm(pas):
    n=0
    while(n<6):
        pw=hashlib.sha256(input("Password : ").encode()).hexdigest()
        if pw==pas:
            bal()
            break
        else:
            n=n+1
    if n>=6:
        print("Invalid User")
        
    return p
def user():
    n=1
    while(n==1):
        us=input("User Name : ")
        if u!=us:
            n=1
        else:
            n=0
            
    return 0
user()
p=atm(pas)
