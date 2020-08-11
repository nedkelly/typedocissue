import { Person, Patient } from 'schema-dts';

type SigneeProps = {
  signee: (Person | Patient) | (Person | Patient)[];
}

const Signee = ({ signee }: SigneeProps) => {
  return `The signee is: ${signee}`;
}

export default Signee;