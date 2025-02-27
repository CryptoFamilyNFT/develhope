import React from "react";

export const objList = [
    { name: 'John', id: 1, age: 25 },
    { name: 'Jane', id: 2, age: 22 },
    { name: 'Tom', id: 3, age: 30 },
]

export const FilterList = (list) => {
    if (!list || list.length === 0) {
        return (
            <div>
                <p>No items to display</p>
            </div>
        )
    }

    const memorisedList = React.useMemo(() => {
        return list.filter((item) => item.age > 18);
    }, [list]);


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