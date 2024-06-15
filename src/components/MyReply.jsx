export default function MyReply({ message }) {
  return (
    <div className="flex flex-row-reverse">
      <div className="max-w-[300px] md:max-w-[500px]">
        <h1 className="text-sm px-3 py-2 bg-sky-600 rounded-l-xl rounded-br-xl">{message}</h1>
      </div>
    </div>
  );
}
