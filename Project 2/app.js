let data = [
    {
        name: 'Jimmy',
        age: '17'
    },
    {
        name: 'Andji',
        age: '32'
    },
    {
        name: 'Rayan',
        age: '24'
    },
    {
        name: 'Quinton',
        age: '53'
    },
    {
        name: 'Cenk',
        age: '12'
    },
    {
        name: 'Taran',
        age: '35'
    }
];

const info = document.querySelector('#info');


let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + item.age + '</div>';
});

info.innerHTML = details.join('\n');