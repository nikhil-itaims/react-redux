import './App.css';
import { useDispatch } from 'react-redux'
import { Navbar } from './component/Navbar';
import { Table } from './component/Table';
import { addBlog } from './store/slices/BlogSlice'
import { removeAllBlog } from './store/actions';

function App() {
	const dispatch = useDispatch()

	const blogUpload = (blogdata) => {
		dispatch(addBlog(blogdata))
	}

	const deleteAll = () => {
		dispatch(removeAllBlog())
	}

	const blogs = [
		{title: "Nikhil's blog", description: "Nikhil's first blog uploaded using redux toolkit."},
		{title: "Mihir's blog", description: "Mihir's first blog uploaded using redux toolkit."},
		{title: "Sagar's blog", description: "Sagar's first blog uploaded using redux toolkit."},
		{title: "Devyang's blog", description: "Devyang's first blog uploaded using redux toolkit."},
		{title: "Chirag's blog", description: "Chirag's first blog uploaded using redux toolkit."}
	]	

	return (
		<>
			<Navbar />
			<div className='container w-75 mt-5'>
				<div className='float-end mb-5'>
					<button type='button' className='btn btn-primary' onClick={() => blogUpload(blogs[0])}>Add blog</button>
				</div>
				<Table />
				<div className='float-end mt-5'>
					<button type='button' className='btn btn-primary' onClick={() => deleteAll()}>Delete all blog</button>
				</div>
			</div>
		</>
	);
}

export default App;
