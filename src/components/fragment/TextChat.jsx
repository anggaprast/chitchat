export default function TextChat({ children, color }) {
  return <h1 className={`break-words text-sm px-3 py-2 ${color} rounded-lg`}>{children}</h1>;
}
