import { useState } from "react";

export default function FruitList(){
    const [fruits, setFruits] = useState([
        'برتقال',
        'موز',
        'تفاح'
    ]);
    const [newFruit, setNewFruit] = useState('');
    const [editFrut, setEditFrut] = useState(null);
    const [editValue, setEditValue] = useState('');

    function addFruit(){
        if(newFruit.trim() !== ''){
            setFruits([...fruits, newFruit]);
            setNewFruit(''); // تعديل هنا
        }
    }

    function deletFrut(fruitToDelet){
        setFruits(fruits.filter(fruit => fruit !== fruitToDelet));
    }

    function startEditing(fruit){
        setEditFrut(fruit); // تعديل هنا
        setEditValue(fruit);
    }

    function saveEdit(){
        setFruits(fruits.map(fruit => (fruit === editFrut ? editValue : fruit)));
        setEditFrut(null);
        setEditValue('');
    }

    return(
        <>
            <h1>قائمة الفواكه</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {editFrut === fruit ? (
                            <input 
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                            />
                        ) : (
                            fruit
                        )}
                        {editFrut === fruit ? (
                            <button onClick={saveEdit}>حفظ</button>
                        ) : (
                            <button onClick={() => startEditing(fruit)}>تعديل</button>
                        )}
                        <button onClick={() => deletFrut(fruit)}>حذف</button>
                    </li>
                ))}
            </ul>
            <input 
                type="text"
                value={newFruit}
                onChange={(e) => setNewFruit(e.target.value)}
                placeholder="أضف فاكهة جديدة"
            />
            <button onClick={addFruit}>إضافة</button>
        </>
    );
}
