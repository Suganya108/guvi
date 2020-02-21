# Given a day, print 'yes' if it is a holiday otherwise print'no'.Assume that weekend days are holidays

d=input()
if d=='saturday' or d=='sunday':
  print('yes',end='')
else:
  print('no',end='')
