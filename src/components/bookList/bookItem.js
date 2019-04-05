import React from 'react'

const BookItem = ({ book }) => {
  return (
    <div className="card">

      <div className="content">
        <div className="header">
          {book.title}
        </div>
        <div className="meta">
          {book.author}
        </div>
        <div className="description">
          {book.subtitle}
        </div>
      </div>
      <div className="extra content">
        <div clclassNameass="ui two buttons">
          <div className="ui basic green button">Seç</div>
          <div className="ui basic red button">Sil</div>
        </div>
      </div>
    </div>
  )
}
export default BookItem;