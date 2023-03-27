const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'sankara lingam', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'kavya kumar', age: 50 }
];
m=[];
employees.filter(function(linga){
	if(linga.age>30){
		m.push(linga);
	}
})
console.log(m);