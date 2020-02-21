# Given 2 strings,check whether they have any common characters.If found print 'yes' else print 'no'.

s1, s2=input().split()
if s1.count(s2) >0 or s2.count(s1):
  print('yes',end='')
else:
  print('no',end='')
