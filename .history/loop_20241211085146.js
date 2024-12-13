const car = {
  name: 'BMW',
  color: 'white'
}

for (let key in car) {
  console.log(
    `${key}: ${car[key]}`
  )
}