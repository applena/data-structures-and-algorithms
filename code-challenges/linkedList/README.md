# Singly Linked List
This demonstrates a class constructor of a singly Linked List

## Challenge
The challenge was to create a linked list using classes. Methods on the Linked List include: insert a value to the linked list, search to see if a value exists in a linked list, and print the entire linked list.

## Approach & Efficiency
To add a value to the linked list, I first determine if this is the first value added to the list - if it is, this becomes the head. If it isn't, I loop through the list looking for the value where the next is null. This is the last node. I then set the new value to that next node. The big O for for this apprach is O(n) due to the unknown length of the node list.

To search the list, I apprached the problem very much like I did for adding a value except for this time, I was just trying to match the value of the node rather than add. I still looped through the list to compare so the big O is once again O(n).

To print the list, I loop through the list calculating how long the list is. Then I console log and return the list with that deapth. Again, my big O is O(n) due to the looping of the list of unknown length.

## API
Methods availabe in my linked list:
insert(value) => this method will insert a vale to the end position in the linked list
includes(value) => this method will return true or false based on wether or not the value is included in the list
print() => this method will print the entire list to the console and as a return value 

# Linked List Insertions
Using the Linked List Class, insert a node value

## Challenge
The challenge was to create a method on the Linked List Class to insert a node before a given value and another method to insert a node after a given value.

## Approach & Efficiency
We cycled through the linked list with a while loop (as long as the next was not null). For each itteriation, we checked to see if the target value matched the current value. If it did, we put the node in either before or after the current value and directed the prvious node to point to our new node. We had our new node point to the next node.

The Big O for this approach is O(n) due to the unknown length of the linked list.

## Solution
![](assets/ll_insertions1.jpeg)
![](assets/ll_insertions2.jpeg)
![](assets/ll_insertions3.jpeg)

# kth from the end of a Linked List

## Challenge
write a method on your Linked List Class that given a number ruturns the value of the node that is that number from the end of the linked list.

## Approach & Efficiency
We cycled through the link to calculate the total length. Then we subrtacted the parameter from the total length to get the target node index. Then we cycled through the list again until we hit that target number and returned the value.

## Solution
![](assets/ll_kth_from_end.jpeg)

# Merging Two Linked List like a zipper

## Challenge
write a function that takes in two linked list and merges them together by alternativly linking the nodes.

## Approach & Efficiency
We cycled through the list assiging the currrent list 2 next to the current list 1 next and the current list 1 next to the current list two. Then we assigned currently ist 1 to current list 2 next and current list 2 to the original current list 2 next (stored in a temp variable). This result would have an O(n) efficienciy since we don't know the length of the lists, but we are only cycling through once.

## Solution
![](assets/ll_merged.jpg)
