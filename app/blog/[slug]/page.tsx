type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

// 

export async function generateStaticParams() {
  // Định nghĩa mảng dữ liệu cứng chứa các slug giả lập
  const localPosts = [
    { slug: 'post-1' },
    { slug: 'post-2' },
    { slug: 'post-3' },
    { slug: 'huong-dan-nextjs' },
    { slug: 'meo-lap-trinh' },
  ];

  // Trả về mảng object khớp chính xác với param [slug]
  return localPosts.map((post) => ({
    slug: post.slug,
  }));
}


export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug} 
  <p>LunacyCICD</p>
  <p>Welcome to HCM City</p>
  </h1>;
}

