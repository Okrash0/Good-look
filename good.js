
var element = document.getElementsByTagName("link");
var index;
var elemen = document.getElementsByTagName('style');
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}
console.log('done');
for (index = elemen.length - 1; index >= 0; index--) {
    elemen[index].parentNode.removeChild(elemen[index]);
}
console.log('done2');

