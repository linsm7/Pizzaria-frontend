import { useContext } from 'react'
import styels from './style.module.scss'
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '@/contexts/AuthContext'

export function Header(){
    const { signOut } = useContext(AuthContext);

    return(
        <header className={styels.headerContainer}>
            <div className={styels.headerContent}>
                <Link href='/dashboard'>
                    <img src="/logo.svg" width={190} height={60}/>
                </Link>

                <nav className={styels.menuNav}>
                    <Link href='/category'>
                    Categoria
                    </Link>

                    <Link href='/product'>
                    Cardápio
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#fff' size={24}/>
                    </button>

                </nav>

            </div>
        </header>
    )
}