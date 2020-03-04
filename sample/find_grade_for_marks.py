# To Calculate the grade for the given marks

mark=int(input("Please Enter Your Mark: "))

print("Marks 90-100: S & 80-89: A+ & 70-79: A & 60-69 : B & 50-59 : C & 40-49 : D & 0-39 : F")

if(mark>=90):
    print("Grade : S")
elif(mark>=80):
    print("Grade : A+")
elif(mark>=70):
    print("Grade : A")
elif(mark>=60):
    print("Grade : B")
elif(mark>=50):
    print("Grade : C")
elif(mark>=40):
    print("Grade : D")
elif(mark>=30):
    print("Grade : E")
else:
    print("Grade : F")
