import React from "react";
import NavBar from "../../components/NavBar";
import { useRouter } from "next/router";

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  return articles.length ? (
    <>
      <Head>
        <meta property="og:image" content={articles[0]?.urlToImage} />
        <meta property="og:description" content={articles[0]?.description} />
        <meta property="og:title" content={articles[0]?.title + " and more!"} />
      </Head>
      <div className="max-w-[600px] mx-auto flex flex-col h-[100vh]">
        <NavBar />
        {articles.map((article, index) => (
          <div
            key={index}
            className="max-w-[500px] mx-auto border-b-2 border-black"
          >
            <h2
              onClick={() => (window.location.href = article.url)}
              className="cursor-pointer text-center my-5 font-bold text-2xl hover:text-violet-600"
            >
              {article.title}
            </h2>
            <div className="text-center">
              <button className="py-1 bg-violet-600 text-white text-center px-3 font-semibold mb-5 text-sm">
                {article.source.name}
              </button>
            </div>
            {!!article.urlToImage && (
              <img
                className=" w-full h-[300px] object-contain"
                src={article.urlToImage}
                alt=""
              />
            )}
            <div className="flex items-center">
              <img
                className="w-5 h-5 object-contain"
                src="/date.png"
                alt="date"
              />
              <p className="font-bold py-2 ml-2">{article.publishedAt}</p>
            </div>
            <p className="py-5 capitalize">{article.description}</p>
          </div>
        ))}
        <div className="paginator">
          <div
            className={pageNumber === 1 ? "disabled" : "active"}
            onClick={() => {
              if (pageNumber > 1) {
                router
                  .push(`/feed/${pageNumber - 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            <button>
              <img src="/previous.png" alt="previous" className="w-5" />
            </button>
          </div>
          <div className="text-lg font-bold">
            <button className="bg-violet-600 text-white rounded-full w-10 h-10">
              {pageNumber}
            </button>
          </div>
          <div
            className={pageNumber === 5 ? "disabled" : "active"}
            onClick={() => {
              if (pageNumber < 5) {
                router
                  .push(`/feed/${pageNumber + 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            <button>
              <img src="/next.png" alt="previous" className="w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="max-w-[600px] mx-auto flex flex-col h-[100vh]">
      <NavBar />
      <div className="font-bold text-xl text-red-600 text-center">
        <h1>Oops! No articles for this page</h1>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const apiJson = await apiResponse.json();
  const { articles } = apiJson;
  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
