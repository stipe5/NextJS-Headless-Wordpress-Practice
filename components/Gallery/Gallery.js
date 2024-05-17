import Image from "next/image";

export const Gallery = ({ columns, cropImages, items }) => {
  const columnWidth = 100 / columns;
  return (
    <div className="flex flex-wrap max-w-5xl mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          style={{ width: `${columnWidth}%` }}
          className="p-5 flex-grow"
        >
          <Image
            src={item.attributes.url}
            height={item.attributes.height}
            width={item.attributes.width}
            alt={item.attributes.alt || ""}
            className="object-cover"
            style={
              cropImages
                ? {
                    width: "100%",
                    height: "100%",
                  }
                : ""
            }
          />
        </div>
      ))}
    </div>
  );
};
