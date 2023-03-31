interface CardProps {
  title: string;
  tag: string[];
  description: string;
}

export function Card({ description, tag, title }: CardProps) {
  return (
    <>
      <header className="text-sm font-bold">{title}</header>
      <p className="text-[#756966] font-medium">{description}</p>
      <div className="flex gap-2">
        {tag.map((tag, index) => (
          <div
            key={index}
            className="w-auto rounded-full bg-[#7C3AED] bg-opacity-30 py-1 px-2"
          >
            <p className="text-xs text-[#7C3AED] font-medium">{tag}</p>
          </div>
        ))}
      </div>
    </>
  );
}
