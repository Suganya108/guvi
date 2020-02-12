# Sum of odd numbers and sum of even numbers

al=[] # al - To get all the elements into the list
odd=[] # odd - To get all odd elements into the list
ev=[] # ev - To get all even elements into the list
l=int(input("len:"))
se=0 # se - To store the sum of even nos.
so=0 # so - To store the sum of odd nos.
for i in range(0,l):
    a=int(input("enter:"))
    al.append(a)
    if((a%2)==0):
        ev.append(a)
        se=se+a
    else:
        odd.append(a)
        so=so+a
print("All Numbers List :",al)
print("Odd Number List :",odd)
print("Even Number List :",ev)
print("Sum of Even nos. :",se)
print("Sum of Odd nos. :",so)
