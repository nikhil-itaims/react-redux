import './App.css';
import { useDispatch } from 'react-redux'
import { Navbar } from './component/Navbar';
import { Table } from './component/Table';
import { addBlog } from './store/actions/BlogActions'
import { useState } from 'react';

function App() {
	const [blogdata, setBlogData] = useState({})

	const dispatch = useDispatch()

	const addData = (e) => {
		setBlogData({ ...blogdata, [e.target.name]: e.target.value })
	}

	const blogUpload = (e) => {
		e.preventDefault();
		dispatch(addBlog(blogdata));
		e.target.reset()
	}

	return (
		<>
			<Navbar />
			<div className='container w-75 mt-5'>
				<div className='row'>
					<div className='col-lg-4'>
						<form onSubmit={blogUpload}>
							<div className="mb-3">
								<label htmlFor="title" className="form-label">Title</label>
								<input type="text" className="form-control" id="title" name='title' onChange={addData} required />
							</div>
							<div className="mb-3">
								<label htmlFor="description" className="form-label">Description</label>
								<input type="text" className="form-control" id="description" name='description' onChange={addData} required />
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
					<div className='col-lg-7 ms-5'>
						<Table />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
