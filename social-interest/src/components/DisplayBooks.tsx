import { FC } from 'react';
import { useQuery, gql } from '@apollo/client';

type Book = {
    id: string;
    title: string;
    author: string;
}

const GET_BOOKS = gql`
    query GetBooks {
        books {
            id
            title
            author
        }
    }
`;
const DisplayBooks: FC = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            {data.books.map((book: Book) => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p><b>Author:</b> {book.author}</p>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default DisplayBooks;