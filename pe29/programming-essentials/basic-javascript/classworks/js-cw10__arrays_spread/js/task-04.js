/* TASK - 4
* Create function getItemList(), that has to receive string from the user with the items' names, separated by the ', '.
* Items in the users string can be repeated.
* User string needs to be transformed into an array with unique values.
*/

const str = 'gogi, dodo, bobob, go home';

// [...new Set(str.split(', '))];

const words = str.split(', ');

const uniqueWordsSet = new Set(words);

uniqueWordsArray = [...uniqueWordsSet];