export default function FileChat({ url }) {
  return (
    <div className="relative size-64 md:size-32 lg:size-64 rounded-md overflow-hidden">
      <img src={url} alt="Image" className="w-full h-full object-cover drag-none" />
    </div>
  );
}
