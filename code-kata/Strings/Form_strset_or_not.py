# You are given two strings ‘s1’ and ‘s2’
# Print Yes if they form strset and No if they don’t.

s1, s2= input().split()
c=s1.count(s2) or s2.count(s1)
if c==0:
  print('No',end='')
else:
  print('Yes',end='')
