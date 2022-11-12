import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { sanityClient, urlFor } from "../../sanity";
import { Post, ButtonTyping } from "../../typings";
import { CiBookmarkPlus } from "react-icons/ci";
// import { HiOutlineBookmarkSlash } from "react-icons/hi";

import Header from "../Components/Header";
import Button from "../Components/Button";
import Socials from "../Components/Socials";
import Menu from "../Components/Menu";
import More from "../Components/More";
import PortableText from "react-portable-text";
import ClapMessage from "../Components/ClapMessage";
import Email from "../Components/Email";

interface PostProps {
  post: Post;
  button: ButtonTyping;
}
function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title className="truncate"> {`${post.title}`}</title>
      </Head>

      <Header bgColor=" bg-white shadow-lg lg:hidden z-10" />

      {/* author */}
      <div className="SinglePostCenterMainContent mt-[5rem]  pt-[4rem] md:pt-4 lg:mt-[6rem]  md:flex">
        <Menu />
        <div className="center md:min-w-[65%] relative px-5 lg:px-10 ">
          <div className="centerWrap md:max-w-[80%] md:mx-auto">
            <div className="a md:flex md:items-start md:justify-between md:mb-9">
              <div className="relative author flex space-x-5 ">
                <Link href="/">
                  <img
                    src={urlFor(post.author.image).url()!}
                    alt="author-image"
                    className="h-12 w-12 rounded-full object-cover hover:cursor-pointer"
                  />
                </Link>

                <div className="detials">
                  <div className="a ">
                    <div className="aa flex  space-x-3 ">
                      <Link href={`/post/${post.slug.current}`}>
                        <p className=" text-md hover:cursor-pointer font-normal  ">
                          {post.author.name}
                        </p>
                      </Link>

                      <Button
                        name=" Follow"
                        addStyle="bg-green-600  rounded-full  px-3 py-1 text-white text-sm hover:bg-green-700 "
                      />
                    </div>
                    <h3 className="ab text-gray-500  text-sm  mt-3 ">
                      {new Date(post._createdAt).toDateString()}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="social mt-5 mb-6 md:mt-0 ">
                <div className="a flex md:flex-row-reverse">
                  <div className="ab flex items-center space-x-2 md:space-x-0 text-md text-gray-500 border border-gray-300 relaive w-fit px-4 py-1 rounded-full  hover:border-gray-400 md:border-0">
                    <CiBookmarkPlus />
                    <span className=" md:hidden">Save </span>
                  </div>

                  {/* AddSocials */}
                  <Socials addStyle="b flex relative items-center text-gray-400 text-xl  ml-5 space-x-5 md:ml-0 md:mr-6 md:space-x-3" />
                </div>
              </div>
            </div>
            {/* End of author */}

            <div className="content relative pb-20 ">
              <div className="img relative h-64 overflow-hidden ">
                <img
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                  className="h-full w-full mb-1 object-cover "
                />
              </div>
              <p className=" relative text-center text-xs text-gray-800  ">
                {post.description}
              </p>

              <h1 className="text-4xl font-bold mt-10 ">{`${post.title}.`}</h1>

              <PortableText content={post.body} className="mt-10  " />

              {/* claps, message. */}
              <ClapMessage />

              <div className="py-5 ">
                {/* <form action="" method="post" className="space-y-10">
        <div className="wrap">
          <label htmlFor="Emal" className="font-bold text-xl text-gray-800 ">
            Get an email whenever Dave Troy publishes.
          </label>
          <input
            placeholder=" Your Email "
            type="email"
            name=""
            id=""
            className=" text-gray-900 mt-2 pt-2  w-full text-sm border-b-[1px] border-black active:border-0 focus:outline-none"
          />
        </div>

        <div className="ab md:hidden flex items-center space-x-2 md:space-x-0 text-xl text-gray-700 border border-gray-400 relaive w-fit px-4 py-1 rounded-full  hover:border-gray-600 md:border-0">
          <CiBookmarkPlus />
          <span className=" md:hidden">Save </span>
        </div>
      </form> */}
                <div className="newsleter py-2 ">
                  <h2> Sign up for The Variable </h2>
                  <p>{`By ${post.author}`}</p>
                  p
                  <p className="   text-[10px] md:text-md leading-3">
                    By signing up, you will create a Medium account if you don’t
                    already have one. Review our Privacy Policy for more
                    information about our privacy practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <More />
      </div>
    </>
  );
}

// Getting Api
export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
        _id,
        slug{
            current
        }
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return { paths, fallback: "blocking" };
};

// Also in pages/posts/[id].js, you need to export getStaticProps so that you can fetch the
// data about the post
// with this id and use it to pre-render the page:

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  author ->{
    name,
    image
  },
  'comments': *[
    _type == "comment" && post._ref == ^._id &&
    approved == true] ,
  description,
  mainImage,
  slug,
  body
}`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
export default Post;
