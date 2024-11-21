function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

const arrayWithDuplicates = ["Mohamad Khaled", "Mohamad Khaled", "Mohamad Sultan"];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);