export default function InfoList(props) {
  const { title, children } = props;
  return (
    <div className="border border-gray-900 ">
      <div className="text-gray-50 bg-gray-900 px-6 py-2 text-lg">{title}</div>
      <ul className="px-10 py-3 list-disc">
        {children.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
