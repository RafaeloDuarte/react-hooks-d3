import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ReduxTeste() {

    const courses = useSelector(state => state.data )
    const dispatch = useDispatch()
    function addCourse(){
        dispatch({type: 'ADD_COURSE', title: 'GraphQL'})
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            <button type="button" onClick={addCourse}>Add</button>
        </>
    )
}