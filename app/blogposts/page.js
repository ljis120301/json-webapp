import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeSnippet from "../components/CodeSnippet";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Cute Website</title>
        <meta
          name="description"
          content="A cute website built with Next.js and TailwindCSS"
        />
      </Head>
      <Header />
      <main>
        <div className="mt-10 text-center border-4 border-light-green rounded-lg p-6 m-4 bg-pink-50 shadow-lg">
          <h1 className="text-light-purple text-3xl font-bold text-pretty">
            an introduction: 🌈
          </h1>
          <p>
            Hello! Welcome to my blog website! I will be using this site to keep
            the world updated on what projects I am working on.
          </p>
          <p>
            I intend to use this site to also inform the world of any chnages I
            made in software to get it working or other tips and tricks
          </p>
          <p>
            That is why I implimented a cool way of displaying code on my
            website!
          </p>
          <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-left">
          <div className="text-light-purple text-left text-3xl font-bold">
            here's a cute code snippet:
          </div>
          <p>This is for me to talk about the code I wrote</p>
          <CodeSnippet
            title={""}
            code={`def cute_function():
               print("Hello, cute world!") 
               return "🌈🦄✨"`}
          ></CodeSnippet>
          </article>

        </div>
        
      </main>
      <Footer />
    </>
  );
}
