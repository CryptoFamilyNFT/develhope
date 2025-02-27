export const objList = [
    { name: 'John', id: 1, age: 25 },
    { name: 'Jane', id: 2, age: 22 },
    { name: 'Tom', id: 3, age: 30 },
]

export const filterList = (list) => {
    if (list.length === 0) return;

    const memorisedList = list.map((item) => {
        for (let key in item) {
            if (key === 'age' && item[key] > 18) {
                return item;
            }
        }
    })

    console.log(memorisedList);

    return (
        <div>
            {memorisedList.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                </div>
            ))}
        </div>
    );
}