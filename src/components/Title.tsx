interface Props {
  title: string;
}

const Title = ({ title }: Props) => (
  <h2 className="text-white text-lg s lg:text-4xl py-3 font-medium">{title}</h2>
);

export default Title;
