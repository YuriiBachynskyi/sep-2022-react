const Character = ({character}) => {
    const {id,name,status,species,qender,image} = character;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>status:{status}</div>
            <div>species:{species}</div>
            <div>gender:{qender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};
