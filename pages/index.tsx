import Head from "next/head";
import Header from "./Components/Header";
import { motion } from "framer-motion";
import { sanityClient, urlFor } from "../sanity";
import { Category, Post } from "../typings";
import Link from "next/link";
import { BsPieChart } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";

interface PropsProps {
  posts: [Post];
  categories: [Category];
}

const Home = ({ posts, categories }: PropsProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (posts) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [loading]);

  const compareData = (a: any, b: any) => a - b;

  return (
    <>
      {!loading ? (
        <Loader />
      ) : (
        <div className="">
          <Head>
            <title>Medium - Where good ideas find you. </title>
            <link rel="icon" href="/logo.ico" />
          </Head>
          <Header />

          <div className="banner bg-[#FFC017]  px-10 mt-[4.9rem] border-b-[.1rem] border-b-black ">
            <div className="wrapper md:max-w-6xl  py-20 mx-auto space-y-10">
              <motion.h1
                initial={{ y: -300 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-6xl font-serif md:text-8xl "
              >
                Stay curious.
              </motion.h1>

              <h4 className="text-xl md:max-w-xl md:text-2xl">
                Discover stories, thinking, and expertise from writers on any
                topic.
              </h4>

              <motion.button
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ delay: 3 }}
                type="submit"
                className="bg-gray-900 hover:bg-black  text-white font-bold rounded-full px-5 py-2 text-sm "
              >
                Start reading
              </motion.button>
            </div>
          </div>

          {/* Trending on medium  */}

          <div className="trending px-10 border-b-[.1rem] border-b-black ">
            <div className="trndin py-10 flex space-x-4 ">
              <BsPieChart />
              <h1 className="font-[750] text-[.8rem] "> TRENDING ON MEDIUM </h1>
            </div>

            <div className="postEach grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
              {posts.map((post, index) => (
                <div className="flex space-x-5 items-start" key={post._id}>
                  <h1 className=" text-gray-300 text-3xl font-[800] -mt-2">
                    {`0${index + 1}`}
                  </h1>

                  <div className="wrap">
                    <div className="author flex">
                      <Link href={`/post/${post.slug.current}`}>
                        {post.author.image && (
                          <img
                            className="h-6 w-6 rounded-full object-cover hover:cursor-pointer"
                            src={urlFor(post.author.image).url()!}
                            alt=""
                          />
                        )}
                      </Link>

                      <Link href={`/post/${post.slug.current}`}>
                        <p className="hover:cursor-pointer text-xs ml-2 font-medium">
                          {post.author.name}
                        </p>
                      </Link>
                    </div>

                    <Link href={`/post/${post.slug.current}`}>
                      <h1 className="font-[750] text-gray-900 hover:cursor-pointer">
                        {post.title}
                      </h1>
                    </Link>

                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(post._createdAt).toDateString()} . 9min read
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* belowTrending
           */}
          <div className="btom px-10 ">
            <div className="discover">
              {/* Discover */}
              <h1 className="font-[750] text-[.8rem] my-5 ">
                DISCOVER MORE OF WHAT MATTERS TO YOU
              </h1>

              <div className="mb-2 wrap flex items-center text-sm md:text-sm flex-wrap   ">
                {categories.map((category: any) => (
                  <Link href={`/category/${category.title}`}>
                    <span className="mb-3 mr-4  border border-gray-200 py-[.5rem] px-[1rem] text-gray-400 rounded-sm hover:cursor-pointer">
                      {category.title.toLowerCase()}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Other Posts */}
              <div className="wrap overflow-hidden">
                {posts.map((post) => (
                  <div className=" flex justify-between overflow-hidden">
                    <div className="authorWrap">
                      <div className="flex">
                        <Link href={`/post/${post.slug.current}`}>
                          {post.author.image && (
                            <img
                              className="h-6 w-6 rounded-full object-cover hover:cursor-pointer"
                              src={urlFor(post.author.image).url()!}
                              alt="author image"
                            />
                          )}
                        </Link>

                        <Link href={`/post/${post.slug.current}`}>
                          <p className="hover:cursor-pointer text-xs ml-2 font-medium">
                            {post.author.name}
                          </p>
                        </Link>
                      </div>

                      <Link href={`/post/${post.slug.current}`}>
                        <h1 className="font-[750] text-gray-900 hover:cursor-pointer">
                          {post.title}
                        </h1>
                      </Link>

                      <div className="flex">
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(post._createdAt).toDateString()} . 9min read
                        </p>
                      </div>
                    </div>

                    <div className="img w-[6rem] h-[6rem] md:w-[10rem] md:h-[8rem ] overflow-hidden">
                      <Link href={`/post/${post.slug.current}`}>
                        <img
                          src={urlFor(post.mainImage).url()!}
                          className="relaive object-cover h-full relative "
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const postsQuery = `*[_type == "post"]{
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
    author ->{
      _id,name,image,
    },
    description,
  }`;

  const categoryQuery = `*[_type == 'category']{
    _id,
    _createdAt,
    title,
  }
`;
  const posts = await sanityClient.fetch(postsQuery);
  const categories = await sanityClient.fetch(categoryQuery);

  /* if (!post) {
    return {
      notFound: true,
    };
  } */

  return {
    props: {
      posts,
      categories,
    },
  };
};

export default Home;
