import resultSrc from '../assets/pic/result.png';
import nameSrc from '../assets/pic/name.png';

export const tableColumns = [
    {
        title: '#',
        dataIndex: 'number',
        width: '40px',
    },
    {
        title: 'Фамилия Имя',
        dataIndex: 'name',
        width: '260px',
        // render метод в зависимости, есть ли картинка или нет (свойство isNamePic)
        render(_, row) {
            return (
                <>
                    {
                        row.isNamePic ?
                        (<>
                            <div className='table__body__cell__wrapper'>
                                <img className='table__body__cell__wrapper__img' src={nameSrc} alt='name'></img>
                                <span className='table__body__cell__wrapper__span'>{row.name}</span>
                            </div>
                        </>)
                        :
                        (<>{row.name}</>)
                    }
                </>
            )
        }
    },
    {
        title: 'Пол',
        dataIndex: 'gender',
        width: '60px'
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
        width: '95px',
    },
    {
        title: 'Город',
        dataIndex: 'city',
        width: '170px',
    },
    {
        title: 'Расстояние',
        dataIndex: 'duration',
        width: '125px',
    },
    {
        title: 'Результаты',
        dataIndex: '',
        minWidth: '125px',
        render() {
            return <img className='table__body__cell__img' src={resultSrc} alt='result'></img>
        }
    }
]