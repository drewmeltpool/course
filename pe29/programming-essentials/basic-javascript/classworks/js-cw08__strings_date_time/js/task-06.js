/* TASK 6
* You have an object of a storage
* Create a method getAmount(goodsList), that takes a string with the list of products.
*
* Return value: a modified string, that has next format for each product -
* 'productName: amountOfThisGoodInStorage'
*
* In case if there is no product with this name in storage, place 'not found' instead of amount.
*
* Your program doesn't need to be case sensitive.
* It means that the 'pIneAPple' should be recognised in the same way as 'pineapple'
*
* 	ADVANCED COMPLEXITY:
*           add grouping by categories to the storage with any representation.
*           add 2-3 categories of products with 4-5 products for each category
*           add the third argument into the function - category to search. If it exists - search in particular category, if there is no third argument - search everywhere
*/

const storage = {
  apple: 8,
  beef: 162,
  banana: 14,
  chocolate: 0,
  milk: 2,
  water: 16,
  coffee: 0,
  blackTea: 13,
  cheese: 0,
};