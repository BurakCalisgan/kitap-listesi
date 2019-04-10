import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookItem from './bookItem';
import './bookList.css';

class BookList extends Component {

  // componentDidMount(){
  //   this.props.addBook({
  //     isbn: '4',
  //     title :'Harry Potter',
  //     subtitle : 'harry',
  //     description: 'description burak',
  //     pages:500,
  //     author : 'J.K. Rownling'
  //   });
  // }


  render() {

    const { bookList } = this.props;

    return (
      <div className="book-list-container ui cards">
        {
          bookList.map(book => (
            <BookItem key={book.isbn} book={book} />
          ))
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    bookList: state.bookList
  };
}

export default connect(mapStateToProps)(BookList);