# You are given a number ‘n’. You have to tell whether a number is great or not. 
#A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back

n=input()
l=[]
p=1
s=0
for i in range(len(n)):
    l.append(int(n[i]))
    p=p*l[i]
    s=s+l[i]
if p+s==int(n):
    print("Great",end="")
else:
    print("no",end="")
