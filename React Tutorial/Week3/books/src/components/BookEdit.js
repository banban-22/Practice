import {useState} from 'react'
import useBooksContext from '../hooks/use-books-context'

const BookEdit = ({book, onSubmit}) => {
    const [title, setTitle] = useState(book.title)
    const {editBookById} = useBooksContext()

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();

        onSubmit();
        editBookById(book.id, title);
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} className="book-edit">
            <label htmlFor="">Title</label>
            <input type="text" className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">Save</button>
        </form>
    </div>
  )
}

export default BookEdit