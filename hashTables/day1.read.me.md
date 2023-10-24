DICTIONARIES! YAY

Hash Functions
* basket.grapes -- hash generator -- puts it in a has table with a value from memory and the value is the key| value pair

Built ins like: Insert, Lookup, Delete & Search are Big O(1) because we can do all these by putting the key into our hash table and finding the value from there, no shifting or anything neccessary

Hash tables are efficient but there is nothing telling our hash function to not store multiple things at the same place in memory, memory is limited and this is why that happens.

When this COLLISION happens, these objects, or, keys and values are in a way limited, and thats where we can use the DS Linked Lists to sift through and find what we need 