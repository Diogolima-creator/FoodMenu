import * as C from './styles';

export const MenuCard = ({name,url,select,type,id}) => {

    return(
        <C.Container id={id} onClick={()=>select(type,id)}>
            <img src={url} alt='' />
            <p>{name}</p>
        </C.Container>
    )
}