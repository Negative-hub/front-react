import React, {useContext, useEffect, useState} from "react";
import {Form} from "../components/Form";
import {TodoList} from "../components/TodoList";
import {MongoDbContext} from "../context/MongoDB/MongoDbContext";
import {Loader} from "../components/Loader";

export const Home = () => {

    const {fetchNotes, loading, notes} = useContext(MongoDbContext)

    const [sort, setSort] = useState('all')

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    const handle = (sort = 'all') => {
        setSort(sort)
    }

    return (
        <>
            <Form handle={handle}/>

            {loading
            ? <Loader />
            : <TodoList notes={notes} sort={sort}/>
            }

        </>
    )
}