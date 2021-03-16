1. Write a console Application in C# where first line of input has an integer "n" and next line of input has "n-1" space separated integers having value
 between 1 to n and no number is repeating. Now you have to find which number is missing.
->Algorithm: 
Calculate the sum of first n natural numbers as sumtotal= n*(n+1)/2
Create a variable sum to store the sum of array elements.
Traverse the array from start to end.
Update the value of sum as sum = sum + array[i]
Print the missing number as sumtotal – sum

->Program:(Run the below program Using Python3 IDE or any Python Online Editor)

#Python Program to Find the Missing Number in a List.
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
