# Calculator

a=int(input("Enter Value 1 : "))
b=int(input("Enter Value 2 : "))
print("Mul-1 , Div-2 , Add-3 , Sub-4 , mod-5 , sqr-6")
c=int(input("Enter Your Choice : "))
if(c==1):
    print("Answer : ",a*b)
elif(c==2):
    print("Answer : ",a/b)
elif(c==3):
    print("Answer : ",a+b)
elif(c==4):
    print("Answer : ",a-b)
elif(c==5):
    print("Answer : ",a%b)
elif(c==6):
    print("Answer : ",a**b)
