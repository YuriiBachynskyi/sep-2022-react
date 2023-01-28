import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id:1,
            name: 'Homer',
            surname: 'Simpson',
            image: 'https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg'
        },
        {
            id:2,
            name: 'Marge',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            id:3 ,
            name: 'Bart',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'
        }
    ]


    return (
        <div>
            {
                simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};