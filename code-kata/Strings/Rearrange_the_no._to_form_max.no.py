# A number is given as input.Find the maximum number that can be formed using the digits.

n=input()
s=[int(x) for x in n]
s.sort(reverse = True)
for i in s:
    print(i,end='')
