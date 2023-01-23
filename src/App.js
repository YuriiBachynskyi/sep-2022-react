import {Simpson} from "./components/Simpson/Simpson";

const App = () => {
    return (
        <div>
            {/*<div>*/}
            {/*    <div>name Homer</div>*/}
            {/*    <div>surname Simpson</div>*/}
            {/*    <img src="https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg" alt="homer"/>*/}
            {/*</div>*/}
            <Simpson name={'Marge'} surneme={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            {/*<div>*/}
            {/*    <div>name Marge</div>*/}
            {/*    <div>surname Simpson</div>*/}
            {/*    <img src="https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png" alt="Marge"/>*/}
            {/*</div>*/}
            <Simpson name={'Homer'} surname={'Simpson'} image={"https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg"}/>
            {/*{Simpson({name:'Homer',surname:'Simpson',image:"https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg"})}*/}
        </div>
    );
};

export {App};