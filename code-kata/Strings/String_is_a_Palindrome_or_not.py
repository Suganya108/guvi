# Given a string S, print 'yes' if it is a palindrome or 'no' if it is not a palindrome.

s=input()
p=s[::-1]
if s==p:
  print('yes',end='')
else:
  print('no',end='')
