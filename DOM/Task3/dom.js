//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var header=document.getElementById('main-header');
// header.style.borderBottom ='solid 3px #000';

// item[1].style.fontWeight='bold';
// item[0].style.fontWeight='bold';
// item[3].style.fontWeight='bold';
// item[2].style.fontWeight='bold';

// item[2].style.backgroundColor='green';

// var li =document.getElementsByTagName('li');
// console.log(li);
// for(var i= 0; i<li.length;i++)
// {
   // li[i].style.backgroundColor='#f4f4f4';
// }

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor ='green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.backgroundColor ='yellow';
thirdItem.style.color='yellow';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length;i++)
    {
        odd[i].style.backgroundColor ='green';
    }