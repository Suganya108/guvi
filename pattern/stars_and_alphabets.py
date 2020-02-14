# C pattern program of stars and alphabets:



def pat(n): 
    k = 2*n - 2
    for i in range(0, n): 
        for j in range(0, k): 
            print(end=" ") 
        k = k - 2
        for j in range(0, i): 
            print("* A ", end="") 
        print("* ")
  
n = int(input("Enter : "))
pat(n) 
