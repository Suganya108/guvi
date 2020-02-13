# Calculator

num1=float(input("Enter the number1: "))
num2=float(input("Enter the number2: "))
ch=float(input("Enter the choice: "))
operator=round(ch)
print("1.Add")
print("2.Sub")
print("3.Mul")
print("4.Div")
print("5.Exp")
print(".")
print(".")
if(operator==1):
    print(num1,"+",num2,"=",num1+num2)
elif(operator==2):
    print(num1,"-",num2,"=",num1-num2)
elif(operator==3):
    print(num1,"*",num2,"=",num1*num2)
elif(operator==4):
    if(num2!=0):
        print(num1,"/",num2,"=",num1/num2)
    else:
        print("the value of", num1,"/", num2,"is: infinity")
elif(operator==5):
    print(num1,"exp",num2,"=",num1**num2)
else:
    print("Invaild Option")
   
