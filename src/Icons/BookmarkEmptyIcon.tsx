export default function BookmarkEmptyIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
        stroke-width="1.5"
        fill="none"
      />
    </svg>
  );
}
