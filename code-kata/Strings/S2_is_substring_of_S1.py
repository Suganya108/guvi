# Given 2 strings.check if the second string is a substring of the first string.
# Print 'yes' if there exists a valid substring otherwise print 'no'.

s1, s2= input().split()
c=s1.count(s2)
if c==0:
  print('no',end='')
else:
  print('yes',end='')
