# Using the method of looping, write a program to print the table of 9 till N in the format as follows: 9 18 27...


n=int(input())
if n==0:
    print("NULL",end="")
else:
    for i in range(1,n+1):
        print(9*i,end="")
        if i<n:
            print(end=" ")
