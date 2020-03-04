def add(a,b):
    ans=a+b
    return ans
def sub(a,b):
    ans=a-b
    return ans
def mul(a,b):
    ans=a*b
    return ans
def div(a,b):
    ans=a/b
    return ans
def mod(a,b):
    ans=a%b
    return ans
def exp(a,b):
    ans=a**b
    return ans
def floor(a,b):
    ans=a//b
    return ans



def menu(a,b):
    print("1 . Addition")
    print("2 . Subtraction")
    print("3 . Multiplication")
    print("4 . Division")
    print("5 . Modulus")
    print("6 . Exponentiation")
    print("7 . Floor Divition")
    c=int(input("Enter Your Choice : "))
    if(c==1):
        p=add(a,b)
    elif(c==2):
       p= sub(a,b)
    elif(c==3):
        p=mul(a,b)
    elif(c==4):
        p=div(a,b)
    elif(c==5):
        p=mod(a,b)
    elif(c==6):
        p=exp(a,b)
    elif(c==7):
        p=floor(a,b)
    
    else:
        print("Invalid Choice! Choose a Valid Choice.")
        menu(a,b)
    return p

a=int(input("Enter Value 1 : "))
b=int(input("Enter Value 2 : "))
p= menu(a,b)
print("Value 1 : {0} and Value 2 : {1} Operated Value is {2}".format(a,b,p))
