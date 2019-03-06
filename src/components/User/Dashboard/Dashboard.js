import React from 'react';
import Header from '../Header/Header';
import PetCard from '../Card/Card';
import './dashboard.css';

export default function Dashboard() {

    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <PetCard />
            </main>
        </div>
    )
}