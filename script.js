window.onload = (event) => {
    var tab1 = document.getElementById("tableDetails");
    tab1.innerHTML = `<tr>
    <th>First Name</th>
    <th>last Name</th>
    <th>Address</th>
    <th>PinCode</th>
    <th>Gender</th>
    <th>Food</th>
    <th>State</th>
    <th>Country</th>
    </tr>`

};
function addToTable(){
var tab = document.getElementById("tableDetails");

tab.innerHTML +=  `<tr>
<td>${firstName.value}</td>
<td>${lastName.value}</td>
<td>${Address.value}</td>
<td>${PinCode.value}</td>
<td>${Gender.value}</td>
<td>${Food.value}</td>
<td>${State.value}</td>
<td>${Country.value}</td>
</tr>`
firstName.value = '';
lastName.value = '';
Address.value = '';
PinCode.value = '';
Gender.value = '';
Food.value = '';
Country.value = '';
State.value = '';
}