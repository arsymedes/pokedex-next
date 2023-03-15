export default function Info(props) {
  const { title, children } = props
  return (
    <div className="border border-gray-900 ">
      <div className="text-gray-50 bg-gray-900 px-6 py-2 text-lg">
        {title}
      </div>
      <div className="px-6 py-3">{children}</div>
    </div>
  )
}