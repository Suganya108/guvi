# Given a string S.Validate if a given string is numeric.print 'yes' if it is a numeric otherwise print 'no'.

s=input()
n = [int(i) for i in s if i.isdigit()]
if len(n)>0:
  print('yes',end='')
else:
  print('no',end='')
