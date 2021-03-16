#1)Python Program to Find the Missing Number in a List.
#getMissingNo is function which takes list as argument.
#Run this Program using Python3 editor.
#Output: it will generate missing number between 1 to 6.
def getMissingNo(A):
    n = len(A)
    total = (n+1)*(n+2)/2
    sum_of_A = sum(A)
    return total - sum_of_A

#Program to test the getMissingNo function
A = [1,2,3,4,6]
miss = getMissingNo(A)
#Printing the missing number
print(int(miss))
