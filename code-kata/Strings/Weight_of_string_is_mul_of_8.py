# You are given a ‘true’ string. String is called true if weight of string is multiple of 8.

s=input()
sum=0
for i in s:
  sum+=ord(i)
if sum%8==0:
  print('1',end='')
else:
  print('0',end='')
