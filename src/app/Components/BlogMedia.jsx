import Image from "next/image";

export default function BlogMedia({ blog }) {
  if (blog.mediaType === "youtube") {
    const id = blog.youtubeUrl.split("v=")[1];
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
      />
    );
  }

  return (
    // <Image
    //   src={blog.thumbnail}
    //   alt={blog.title}
    //   width={1200}
    //   height={630}
    // />
    <>
        
    </>
  );
}