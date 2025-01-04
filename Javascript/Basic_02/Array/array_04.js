// indexOf & include Method :-

// indexOf :- This method is used to get the index of the first occurrence of the specified element in this list.
//            or returns index of something.
//            If the specified element is not a list, it throws ClassCastException.
//            If the list contains multiple elements equal to the specified element, it returns the index of the
//            first occurrence of the specified element.
//            If the list is empty, it returns -1.
//            If the specified element is null and this list may contain null elements, it returns the index
//            of the first occurrence of the specified element.
//            If the specified element is null and this list does not contain null elements, it throws
//            NullPointerException.
//            If the specified element is not found in this list, it returns -1.

let marks = [99,97,98,100];

console.log(marks.indexOf(98));

console.log(marks.indexOf(95));

// include :- This method is used to check if this list contains the specified element.
//            or search the value.

let color = ["yello","red","green","white"]

console.log(color.includes("white"));

console.log(color.includes("blue"));
