import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog } from '../store/slices/BlogSlice'

export const Table = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.blogs
    })

    const removeBlog = (id) => {
		dispatch(deleteBlog(id))
	}
    
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e, index) =>
                <tr key={index}>
                    <th scope="row">{index +1 }</th>
                    <td>{e.title}</td>
                    <td>{e.description}</td>
                    <td><button type='button' className='btn btn-danger' onClick={() => removeBlog(index)}>Delete</button></td>
                </tr>
                )}
            </tbody>
        </table>
    )
}
