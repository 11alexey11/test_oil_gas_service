import resultSrc from '../assets/pic/result.png';

export const tableColumns = [
    {
        title: '#',
        dataIndex: 'number',
        width: '21px',
    },
    {
        title: 'Фамилия Имя',
        dataIndex: 'name',
        width: '220px',
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
        width: '90px',
    },
    {
        title: 'Город',
        dataIndex: 'city',
        width: '170px',
    },
    {
        title: 'Расстояние',
        dataIndex: 'duration',
        width: '120px',
    },
    {
        title: 'Результаты',
        dataIndex: '',
        minWidth: '110px',
        render() {
            return <img src={resultSrc} alt='result'></img>
        }
    }
]