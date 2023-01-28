import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/200px-Homer_Simpson_2006.png',
        },
        {
            id: 2,
            name: 'Marge',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
        },
        {
            id: 3,
            name: 'Bart',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif',
        },
        {
            id: 4,
            name: 'Lisa',
            surname: 'Simpson',
            image: 'https://i.pinimg.com/564x/80/01/92/800192abbe5dbe4d770d8d3f5aa47793.jpg',
        },
        {
            id: 5,
            name: 'Maggie',
            surname: 'Simpson',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQar_StUCXmAl4WE8VE9t4o_iLWOe9X6-SP5SS3IBcOiLELfq4NhpUbMC0XIwlJJ70uABM&usqp=CAU',
        },
    ]
    return (
        <div>
            {
                simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};