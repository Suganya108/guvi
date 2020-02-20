# Ria is a 5 year old girl. Her mother wants to teach her how to sort words in the same order that they appear in a dictionary. 
#She decides to write a program to sort a given set of strings based on their alphabetical order. 
#Help Ria’s mother to complete the program.

n=input()
l=input().split()[:3]
l.sort()
for i in range(len(l)):
    print(l[i],end="")
    if i<len(l)-1:
        print(end=" ")
