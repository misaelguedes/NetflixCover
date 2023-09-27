import './Header.css'

export default function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className='logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png' alt='logo'/>
                </a>
            </div>
            <div className='usuario'>
                <a>
                    <img src='https://loodibee.com/wp-content/uploads/Netflix-avatar-3.png' alt='Usuário'/>
                </a>
            </div>
        </header>
    )
}