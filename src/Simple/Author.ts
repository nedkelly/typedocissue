import { Person } from 'schema-dts';


type AuthorProps = {
  author: Person;
};

const Author = ({ author }: AuthorProps) => {
  return `The author is: ${author}`;
}

export default Author;