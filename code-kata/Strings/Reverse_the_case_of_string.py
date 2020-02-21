# Given a string S of length N, reverse the case of each letter.

s=input()
c=[]
for i in s:
    if i.isupper()==True:
        c.append(i.lower())
    else:
        c.append(i.upper())
for i in c:
    print(i,end='')
