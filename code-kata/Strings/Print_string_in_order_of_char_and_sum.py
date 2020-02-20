# You are given a string ‘s’.Your task is to print the string in the order they are present and then sum of digits.

s=input()
n = [int(i) for i in s if i.isdigit()] 
sum=0
for i in n:
    s=s.replace(str(i),'')
print(s,end='')
for i in n:
    sum+=i
print(sum,end='')
