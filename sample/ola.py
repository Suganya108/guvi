def auto(a,b):
    price=a*b
    return price
def micro(a,b):
    price=a*b
    return price
def mini(a,b):
    price=a*b
    return price
def prime(a,b):
    price=a*b
    return price

def menu():
    print("1 . Auto (Rs.10/km)")
    print("2 . Micro (Rs.25/km)")
    print("3 . Mini (Rs.45/km)")
    print("4 . Prime (Rs.100/km)")
    c=round(float(input("Enter Your Choice : ")))
    if(c==1):
        p=auto(km,10)
    elif(c==2):
       p= micro(km,25)
    elif(c==3):
        p=mini(km,45)
    elif(c==4):
        p=prime(km,100)
    else:
        print("Invalid Choice! Choose a Valid Choice.")
        p=menu()
    return p

def sd(s):
    km=0
    while(km==0):
        
        d=round(float(input("Enter Your Destination : ")))
        if(d>s):
            if(s<=0):
                print("Invalid Destination! Please Enter a Valid Destination.")
            else:
                km=d-s
        else:
            print("Invalid Destination! Please Enter a Valid Destination.")
    
    return km

def yn():
    n=1
    while(n==1):
        print("Do You Want to Continue or Not")
        print("1 . YES")
        print("2 . NO")
        c=round(float(input("Enter Your Choice : ")))
        if(c==1):
            m=1
            n=0
        elif(c==2):
            m=0
            n=0
    
        else:
            n=1
            print("Invalid Choice! Choose a Valid Choice.")
    return m
       

m=1
while(m==1):
    s=round(float(input("Enter Your Source : ")))
    km=sd(s)    
    p= menu()
    print("Total Kilometer you have travelled is {0} so Your Cost is Rs.{1}".format(km,p))
    
    m=yn()
print("Thank You for Your Ride")

