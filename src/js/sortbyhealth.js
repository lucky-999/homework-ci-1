export default function newArray(array) {
    array.sort(function(a, b) {
        return a.health - b.health;
    });
    array.reverse();
    return array;
}