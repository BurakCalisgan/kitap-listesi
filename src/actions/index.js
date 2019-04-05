//Aksiyonlar

//Kitap Ekleme
export const addBook = ({
    isbn, title, subtitle, description, author, pages
}) => {

    return {
        //Aksiyon Objesi
        type: 'ADD_BOOK',
        payload: {
            isbn, title, subtitle, description, author, pages
        }

    }
}

//Kitap silme
export const deleteBook = (book) => {
    return {
        type: 'DELETE_BOOK',
        payload: book
    }
}

//Kitap seçme
export const selectBook = (book) => {
    return {
        type: 'SELECT_BOOK',
        payload: book
    }

}

//Kitap Seçmeme
export const deselectBook = () => {
    return {
        type: 'DESELECT_BOOK'
    }
}


//Bu şekilde de export edilebilir.
// export {
//     addBook,
//     deleteBook
// }