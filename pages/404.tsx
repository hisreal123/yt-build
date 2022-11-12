import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { sanityClient, urlFor } from "../sanity";
import Post from "../typings";
import { motion } from "framer-motion";

interface PostProps {
  _id: string;
  _createdAt: string;
  title: string;
  author: { name: string; image: string };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}
export default function ErrorPage() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const query = `*[_type == "post"]{
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

    const fewPosts = sanityClient
      .fetch(query)
      .then((data) => setPosts(data.slice(1, 4)))
      .catch(console.error);
  }, [posts]);

  return (
    <div>
      <Head>
        <title>Not Found - Medium </title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      {/* Header */}
      <div className=" p-5 shadow-lg bg-white fixed w-full top-0 z-10">
        <div className=" flex justify-between md:max-w-7xl  md:mx-auto">
          <div className="logo">
            <Link href="/">
              <img
                className="h-6  cursor-pointer "
                alt="Home Page and Logo"
                src="https://seeklogo.com/images/M/medium-logo-33836F45D2-seeklogo.com.png"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ErrorPage Body */}
      <div className="ErrorPage mt-[4.9rem] text-center relative ">
        <div className="wrap px-5 md:px-0 ">
          <div className="full md:flex  md:px-10 md:max-w-5xl md:mx-auto md:justify-center  md:space-x-9">
            <motion.img
              src="../assets/img.png"
              alt=""
              className="  h-72 w-72 md:h-[29rem] md:w-[29rem]  mx-auto  my-8 hidden md:block "
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            />

            <div className="fullTExt md:w-full md:relative md:text-left md:max-w-[50%]">
              <div className="text ">
                <h4 className="pt-16  pb-4 text-sm md:text-lg lg:pb-0 md:pt-8">
                  PAGE NOT FOUND
                </h4>
                <h1 className=" text-[5.5rem] text-gray-300 md:text-[8rem] ">
                  404
                </h1>
                <h2 className=" text-3xl font-serif  text-gray-600 lg:text-6xl lg:max-w-[40%] lg:mb-4">
                  Out of nothing, something.
                </h2>

                <motion.img
                  src="../assets/img.png"
                  alt=""
                  className="h-72 w-72 md:h-[29rem] md:w-[29rem]  mx-auto  my-8 md:hidden "
                />
              </div>

              <div className="toHome md:min-w-full">
                <p className="text-center w-7xl mx-auto px-4 mb-5 md:mb-2 md:font-[400] md:px-0 md:text-left md:w-[24rem] md:mx-0 flex-wrap ">
                  You can find (just about) anything on Medium — apparently even
                  a page that doesn’t exist. Maybe these stories about finding
                  what you didn’t know you were looking for will take you
                  somewhere new?
                  <br />
                </p>
                <Link href="/">
                  <motion.span
                    // whileHover={{ animate: }}
                    className=" font-[750] text-gray-900 cursor-pointer"
                  >
                    Hello
                  </motion.span>
                </Link>
              </div>
            </div>
          </div>

          {/* posts */}
          <div className="grid text-left grid-cols-1 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto md:gap-5">
            {posts.map((post) => (
              <div
                key={post._id}
                className="card sm:text-left  rounded-md overflow-hidden  lg:mx-auto my-10 shadow-lg  "
              >
                <div className="wrapper  relative  ">
                  <div className="imgWraper h-24 w-full  transition-all duration-100 overflow-hidden ">
                    <Link href={`/post/${post.slug.current}`}>
                      <img
                        src={urlFor(post.mainImage).url()!}
                        className="relaive object-center cursor-pointer "
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="ctn px-5 pt-4 pb-3 ">
                    <h3 className="truncate text-sm text-gray-500  font-light mb-2 ">
                      {post.description}
                    </h3>
                    <h2 className="mb-8 font-bold text-xl text-gray-900 cursor-pointer">
                      <Link href={`/post/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <div className="author flex space-x-5 ">
                      <Link href={`/post/${post.slug.current}`}>
                        <img
                          src={urlFor(post.author.image).url()!}
                          alt="author image"
                          className="h-8 w-8   rounded-full cursor-pointer object-cover"
                        />
                      </Link>

                      <div className="authorDetails  flex flex-col items-start">
                        <Link href={`/post/${post.slug.current}`}>
                          <span className=" text-sm text-gray-600 hover:cursor-pointer ">
                            {post.author.name}
                          </span>
                        </Link>

                        <Link href={`/post/${post.slug.current}`}>
                          <span className=" text-xs text-gray-400 ">
                            {new Date(post._createdAt).toDateString()}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
