import random
def ran(num):
    r=int(random.randint(1,10))
    if num==r:
        print("You Win!")
    else:
        print("Computer Win!")
    print("Do you want to continue playing : ")
    print("1 . YES")
    print("2 . NO")
    c=round(float(input("Enter Your Choice : ")))
    if(c==1):
        game()
    elif c==2:
        exit
    return 0

def game():
    n=1
    while(n==1):
        print("Please Enter a number between 1 and 10")
        num=int(input("Enter the Number : "))
        if(num>1 and num<10):
            n=0
        else:
            n=1
    ran(num)
    return 0
game()

