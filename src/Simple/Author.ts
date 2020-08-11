import { Person } from 'schema-dts';

type AuthorProps = {
  author: Person | Person[];
}

const Author = ({ author }: AuthorProps) => {
  return `The author is: ${
    Array.isArray(author)
          ? author.map(val => val.name).join(', ')
          : author.name
  }`;
}

export default Author;