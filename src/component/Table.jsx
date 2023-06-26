import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogList, deleteBlog } from '../store/actions/BlogActions'

export const Table = () => {

    const dispatch = useDispatch()

    const { blogs, loading } = useSelector(state => state.blogs)

    const removeBlog = (id) => {
        dispatch(deleteBlog(id))
        dispatch(getBlogList())
    }

    useEffect(() => {
        dispatch(getBlogList())
    }, [])

    return (
        <>
            {loading ? (
                <>
                    <div className='mt-5 d-flex justify-content-center alogn-items-center'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>
            ) : (
                <>
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
                            {blogs && blogs.map((e, index) =>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{e.title}</td>
                                    <td>{e.description}</td>
                                    <td><button type='button' className='btn btn-danger' onClick={() => removeBlog(e.id)}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            )}
        </>
    )
}
