const arr=["mango","banana","grapes","watermelon","guava"]
const ul=document.getElementById('list')
for(let i=0;i<arr.length;i++)
{
let li=document.createElement('li')
li.innerText=arr[i]
ul.appendChild(li)
}