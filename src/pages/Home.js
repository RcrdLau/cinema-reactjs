import React from 'react'
import Header from 'components/Header'
import FilmsList from 'components/FilmsList'
import Loader from 'components/Loader'
import ListTask from 'components/ListTask'

const Home = () => {
    return (
        <>
            <Header></Header>
            <FilmsList></FilmsList>
        </>
    )
}
export default Home